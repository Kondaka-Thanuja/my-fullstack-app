

// db.js
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,       // e.g., mainline.proxy.rlwy.net
  user: process.env.DB_USER,       // e.g., root
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,   // e.g., mydatabase
  port: process.env.DB_PORT        // e.g., 45729
});

// Connect and log errors
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database");

    // Create users table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    db.query(createTableQuery, (err) => {
      if (err) {
        console.error("❌ Failed to create users table:", err.message);
      } else {
        console.log("✅ Users table ready");
      }
    });
  }
});

export default db;

