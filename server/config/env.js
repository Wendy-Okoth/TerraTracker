// server/config/env.js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the server/.env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("✅ Environment loaded:", process.env.OPENAI_API_KEY ? "Found key" : "Missing key");
