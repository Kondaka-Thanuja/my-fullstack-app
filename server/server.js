import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import db from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins (optional: restrict to frontend URL in production)
app.use(cors());
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => res.send("Server is running!"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
