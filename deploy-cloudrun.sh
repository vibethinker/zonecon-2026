#!/usr/bin/env bash
# =============================================================================
#  deploy-cloudrun.sh — One-command deploy to Google Cloud Run (free tier)
#
#  Prerequisites (run once on your machine):
#    1. Install Google Cloud CLI: https://cloud.google.com/sdk/docs/install
#    2. Run: gcloud auth login
#    3. Run: gcloud auth configure-docker
#
#  Usage:
#    ./deploy-cloudrun.sh                          # Interactive first-time setup
#    ./deploy-cloudrun.sh --project my-project-id  # Skip prompt, set project
#    ./deploy-cloudrun.sh --help
#
#  Free tier covers:
#    • 2 million requests/month
#    • 360,000 GB-seconds of memory
#    • 180,000 vCPU-seconds
#    • 1 GB network egress/month
# =============================================================================
set -euo pipefail

# ─── DEFAULTS (edit these or pass as flags) ───────────────────────────────────
SERVICE_NAME="zonecon-2026"
REGION="asia-south1"         # Mumbai — closest to Kerala; change if needed
IMAGE_NAME="zonecon-2026"
MEMORY="256Mi"               # Keep low to stay in free tier
CPU="1"
MIN_INSTANCES="0"            # Scale to 0 when idle = $0 cost
MAX_INSTANCES="3"            # Cap instances to avoid surprise bills
PORT="8080"                  # Cloud Run always uses 8080 internally

# ─── COLOURS ─────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'

log()  { echo -e "${CYAN}[$(date +%T)]${RESET} $*"; }
ok()   { echo -e "${GREEN}[$(date +%T)] ✓${RESET} $*"; }
warn() { echo -e "${YELLOW}[$(date +%T)] ⚠${RESET} $*"; }
die()  { echo -e "${RED}[$(date +%T)] ✗ ERROR:${RESET} $*" >&2; exit 1; }

# ─── ARGS ────────────────────────────────────────────────────────────────────
PROJECT_ID=""
for i in "$@"; do
  case "$i" in
    --project=*) PROJECT_ID="${i#*=}" ;;
    --project)   shift; PROJECT_ID="$1" ;;
    --region=*)  REGION="${i#*=}" ;;
    --help|-h)
      echo -e "${BOLD}Usage:${RESET} $0 [--project PROJECT_ID] [--region REGION]"
      echo ""
      echo "  --project  GCP project ID (prompted if not given)"
      echo "  --region   Cloud Run region (default: asia-south1 / Mumbai)"
      echo ""
      echo "  Recommended free-tier regions:"
      echo "    asia-south1   (Mumbai)    ← best for India"
      echo "    us-central1   (Iowa)      ← most generous free tier"
      echo "    europe-west1  (Belgium)"
      exit 0 ;;
  esac
done

# ─── BANNER ──────────────────────────────────────────────────────────────────
echo -e "${BOLD}${CYAN}"
echo "╔═══════════════════════════════════════════════════════╗"
echo "║   The Real Yugam — Google Cloud Run Deployment Tool   ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo -e "${RESET}"

# ─── CHECK PREREQUISITES ──────────────────────────────────────────────────────
log "Checking prerequisites..."
command -v gcloud >/dev/null 2>&1 || die "Google Cloud CLI not found.\nInstall: https://cloud.google.com/sdk/docs/install"
command -v docker >/dev/null 2>&1 || die "Docker not found.\nInstall: https://docs.docker.com/get-docker/"
ok "gcloud and docker found"

# ─── PROJECT ─────────────────────────────────────────────────────────────────
if [[ -z "$PROJECT_ID" ]]; then
  CURRENT=$(gcloud config get-value project 2>/dev/null || true)
  if [[ -n "$CURRENT" ]]; then
    echo -e "Current GCP project: ${BOLD}${CURRENT}${RESET}"
    read -rp "Press Enter to use it, or type a different project ID: " INPUT
    PROJECT_ID="${INPUT:-$CURRENT}"
  else
    read -rp "Enter your GCP Project ID: " PROJECT_ID
  fi
fi

[[ -n "$PROJECT_ID" ]] || die "No project ID provided."
gcloud config set project "$PROJECT_ID" --quiet
ok "Using project: ${PROJECT_ID}"

# ─── ENABLE REQUIRED APIS (idempotent) ───────────────────────────────────────
log "Enabling required GCP APIs (one-time, takes ~30s on first run)..."
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  --project="$PROJECT_ID" \
  --quiet
ok "APIs enabled"

# ─── ARTIFACT REGISTRY REPO ──────────────────────────────────────────────────
REGISTRY_REPO="cloud-run-apps"
REGISTRY_HOST="${REGION}-docker.pkg.dev"
IMAGE_URI="${REGISTRY_HOST}/${PROJECT_ID}/${REGISTRY_REPO}/${IMAGE_NAME}"

log "Ensuring Artifact Registry repository exists..."
if ! gcloud artifacts repositories describe "$REGISTRY_REPO" \
     --location="$REGION" --project="$PROJECT_ID" --quiet 2>/dev/null; then
  gcloud artifacts repositories create "$REGISTRY_REPO" \
    --repository-format=docker \
    --location="$REGION" \
    --description="Cloud Run container images" \
    --project="$PROJECT_ID" \
    --quiet
  ok "Created Artifact Registry repo: ${REGISTRY_REPO}"
else
  ok "Artifact Registry repo already exists"
fi

# ─── CONFIGURE DOCKER AUTH ────────────────────────────────────────────────────
log "Configuring Docker authentication for ${REGISTRY_HOST}..."
gcloud auth configure-docker "${REGISTRY_HOST}" --quiet
ok "Docker auth configured"

# ─── BUILD & PUSH IMAGE ───────────────────────────────────────────────────────
TAG=$(date +%Y%m%d-%H%M%S)
VERSIONED_URI="${IMAGE_URI}:${TAG}"
LATEST_URI="${IMAGE_URI}:latest"

log "Building Docker image (this takes 2–5 minutes on first run)..."
docker build \
  --platform linux/amd64 \
  --build-arg BUILDKIT_INLINE_CACHE=1 \
  --cache-from "${LATEST_URI}" \
  -t "${VERSIONED_URI}" \
  -t "${LATEST_URI}" \
  .
ok "Image built: ${VERSIONED_URI}"

log "Pushing image to Artifact Registry..."
docker push "${VERSIONED_URI}"
docker push "${LATEST_URI}"
ok "Image pushed"

# ─── DEPLOY TO CLOUD RUN ──────────────────────────────────────────────────────
log "Deploying to Cloud Run (region: ${REGION})..."
gcloud run deploy "$SERVICE_NAME" \
  --image="${VERSIONED_URI}" \
  --platform=managed \
  --region="$REGION" \
  --port="$PORT" \
  --memory="$MEMORY" \
  --cpu="$CPU" \
  --min-instances="$MIN_INSTANCES" \
  --max-instances="$MAX_INSTANCES" \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production,PORT=${PORT}" \
  --project="$PROJECT_ID" \
  --quiet

# ─── PRINT LIVE URL ──────────────────────────────────────────────────────────
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" \
  --region="$REGION" \
  --project="$PROJECT_ID" \
  --format="value(status.url)")

echo ""
echo -e "${BOLD}${GREEN}"
echo "╔═══════════════════════════════════════════════════════╗"
echo "║            🎉 Deployment Successful!                  ║"
echo "╠═══════════════════════════════════════════════════════╣"
printf  "║  %-53s ║\n" "Service : ${SERVICE_NAME}"
printf  "║  %-53s ║\n" "Region  : ${REGION}"
printf  "║  %-53s ║\n" "Image   : ${TAG}"
echo "╠═══════════════════════════════════════════════════════╣"
printf  "║  🌐 %-51s ║\n" "${SERVICE_URL}"
echo "╚═══════════════════════════════════════════════════════╝"
echo -e "${RESET}"

echo -e "${YELLOW}💡 Free tier reminder:${RESET}"
echo "   • 2M requests/month free"
echo "   • Min-instances=0 → scales to zero when idle (no charge)"
echo "   • Monitor usage: https://console.cloud.google.com/run"
echo ""
echo -e "${CYAN}Re-deploy after code changes:${RESET} ./deploy-cloudrun.sh --project ${PROJECT_ID}"
