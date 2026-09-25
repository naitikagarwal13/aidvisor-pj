import mysql from "mysql2/promise";
import "dotenv/config";

export const pool = mysql.createPool({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "aidvisor",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

export async function assertDbConnection() {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    console.log("[db] MySQL connection OK");
  } catch (err) {
    console.error("[db] Could not connect to MySQL:", (err as Error).message);
    console.error(
      "[db] Check DB_HOST / DB_USER / DB_PASSWORD / DB_NAME in your .env, and that schema.sql has been run.",
    );
  }
}
