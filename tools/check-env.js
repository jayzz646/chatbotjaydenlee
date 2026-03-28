#!/usr/bin/env node
const required = [
  "POSTGRES_URL",
  "REDIS_URL",
  "NEXTAUTH_SECRET",
  "AI_GATEWAY_API_KEY",
  "BLOB_READ_WRITE_TOKEN"
];

const missing = required.filter((k) => !process.env[k]);

if (missing.length > 0) {
  console.error("Missing required environment variables:", missing.join(", "));
  process.exit(1);
}

console.log("All required environment variables are set.");
process.exit(0);
