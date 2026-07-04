// PM2 ecosystem config — keeps the app alive on crashes & auto-starts on reboot
// Usage:
//   pm2 start ecosystem.config.cjs
//   pm2 save && pm2 startup      ← persist across reboots
//   pm2 logs zonecon-2026        ← view logs
//   pm2 restart zonecon-2026     ← restart after a new deploy

module.exports = {
  apps: [
    {
      name: "zonecon-2026",
      script: ".output/server/index.mjs",
      interpreter: "node",
      instances: 1,          // increase to "max" for cluster mode on multi-core servers
      exec_mode: "fork",     // change to "cluster" if using instances > 1
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      // Structured logs
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
    },
  ],
};
