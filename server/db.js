import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,    // mainline.proxy.rlwy.net
  user: process.env.DB_USER,    // root
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT     // 45729
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to Railway MySQL Database");
});

export default db;
