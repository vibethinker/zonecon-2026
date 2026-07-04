#!/usr/bin/env bash
# =============================================================================
#  run-server.sh — Deploy & run "The Real Yugam" Zonecon 2026 website
#  Usage:
#    ./run-server.sh              # Full deploy (install → build → start)
#    ./run-server.sh --build-only # Build without starting
#    ./run-server.sh --start-only # Start from an existing build
#    ./run-server.sh --dev        # Start in development (hot-reload) mode
# =============================================================================
set -euo pipefail

# ─── CONFIG ──────────────────────────────────────────────────────────────────
APP_NAME="zonecon-2026"
PORT="${PORT:-3000}"          # Override with: PORT=8080 ./run-server.sh
NODE_ENV="${NODE_ENV:-production}"

# ANSI colours
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'

log()  { echo -e "${CYAN}[$(date +%T)]${RESET} $*"; }
ok()   { echo -e "${GREEN}[$(date +%T)] ✓${RESET} $*"; }
warn() { echo -e "${YELLOW}[$(date +%T)] ⚠${RESET} $*"; }
die()  { echo -e "${RED}[$(date +%T)] ✗ ERROR:${RESET} $*" >&2; exit 1; }

# ─── ARGUMENT PARSING ────────────────────────────────────────────────────────
MODE="full"
for arg in "$@"; do
  case "$arg" in
    --build-only) MODE="build" ;;
    --start-only) MODE="start" ;;
    --dev)        MODE="dev"   ;;
    --help|-h)
      echo -e "${BOLD}Usage:${RESET} $0 [--build-only | --start-only | --dev | --help]"
      exit 0 ;;
    *) die "Unknown option: $arg" ;;
  esac
done

# ─── SYSTEM CHECKS ───────────────────────────────────────────────────────────
check_deps() {
  log "Checking system dependencies..."
  command -v node >/dev/null 2>&1 || die "Node.js is not installed. Install it: https://nodejs.org"
  command -v npm  >/dev/null 2>&1 || die "npm is not installed."

  NODE_VER=$(node -e "process.stdout.write(process.versions.node)")
  NODE_MAJOR=$(echo "$NODE_VER" | cut -d. -f1)
  [[ "$NODE_MAJOR" -ge 18 ]] || die "Node.js >= 18 required (found v${NODE_VER})"
  ok "Node.js v${NODE_VER} found"
}

# ─── INSTALL ─────────────────────────────────────────────────────────────────
install_deps() {
  log "Installing npm dependencies..."
  npm ci --prefer-offline --no-audit --no-fund 2>&1 | tail -3
  ok "Dependencies installed"
}

# ─── BUILD ───────────────────────────────────────────────────────────────────
build_app() {
  log "Building for production (NODE_ENV=${NODE_ENV})..."
  npm run build 2>&1
  ok "Build complete → .output/"
}

# ─── START (production SSR) ──────────────────────────────────────────────────
start_app() {
  # Nitro outputs its server entry to .output/server/index.mjs
  OUTPUT_DIR=".output/server"
  ENTRY="${OUTPUT_DIR}/index.mjs"

  [[ -f "$ENTRY" ]] || die "Server entry not found at ${ENTRY}. Did you build first? Run: ./run-server.sh"

  log "Starting ${APP_NAME} on port ${PORT}..."
  echo -e "${BOLD}"
  echo "  ┌──────────────────────────────────────────┐"
  echo "  │  🌟 The Real Yugam — Zonecon 2026         │"
  echo "  │  http://localhost:${PORT}                    │"
  echo "  └──────────────────────────────────────────┘"
  echo -e "${RESET}"

  PORT="$PORT" NODE_ENV="$NODE_ENV" node "$ENTRY"
}

# ─── DEV MODE ────────────────────────────────────────────────────────────────
dev_app() {
  log "Starting development server (hot-reload)..."
  warn "Do NOT use this in production!"
  PORT="$PORT" npm run dev
}

# ─── MAIN ────────────────────────────────────────────────────────────────────
echo -e "${BOLD}${CYAN}"
echo "╔═══════════════════════════════════════════════╗"
echo "║   The Real Yugam — Zonecon 2026 Deploy Tool   ║"
echo "╚═══════════════════════════════════════════════╝"
echo -e "${RESET}"

check_deps

case "$MODE" in
  full)
    install_deps
    build_app
    start_app
    ;;
  build)
    install_deps
    build_app
    ok "Build complete. Run './run-server.sh --start-only' to serve."
    ;;
  start)
    start_app
    ;;
  dev)
    install_deps
    dev_app
    ;;
esac
