# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (layer-cache friendly)
COPY package.json package-lock.json ./

# Install all dependencies (including devDeps needed for the build)
RUN npm ci --no-audit --no-fund

# Copy the rest of the source
COPY . .

# Build with the node-server Nitro preset so the output is a plain Node.js HTTP
# server (not Cloudflare Workers), which is what Cloud Run expects.
ENV NITRO_PRESET=node-server
RUN npm run build

# ─── Stage 2: Runtime ─────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the production server bundle — no node_modules, no source
COPY --from=builder /app/.output ./.output

# Copy public assets (images, etc.)
COPY --from=builder /app/public ./public

# Cloud Run automatically sets PORT (default 8080). Nitro respects it.
ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

# Nitro's node-server preset outputs a self-contained server entry
CMD ["node", ".output/server/index.mjs"]
