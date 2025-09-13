require("dotenv").config();

// Determine DB URL from environment with sensible precedence:
let db;

if (process.env.DEPLOYMENT === "kubernetes") {
  // For Kubernetes deployment, prioritize Kubernetes env vars and don't fall back to DB_LOCAL
  db = process.env.DB || process.env.DB_DOCKER;
} else if (process.env.DEPLOYMENT === "docker") {
  // For Docker deployment, use DB_DOCKER
  db = process.env.DB_DOCKER;
} else {
  // For local development, use DB_LOCAL
  db = process.env.DB_LOCAL;
}

// Final fallback if nothing is set
if (!db) {
  db = process.env.DB || process.env.DB_DOCKER || process.env.DB_LOCAL;
}

module.exports = {
  deployment: process.env.DEPLOYMENT,
  name: process.env.ENVIRONMENT,
  db,
  port: process.env.PORT || 8000,
};


