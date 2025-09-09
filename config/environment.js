require("dotenv").config();

let db;

if (process.env.DEPLOYMENT === "docker") {
  db = process.env.DB_DOCKER;
} else {
  db = process.env.DB_LOCAL; // fallback for local dev
}

module.exports = {
  deployment: process.env.DEPLOYMENT,
  name: process.env.ENVIRONMENT,
  db,
  port: process.env.PORT || 8000,
};


