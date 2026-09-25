import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ override: true });
import { assertDbConnection } from "./config/db.js";
import { authRouter } from "./routes/authRoutes.js";
import { aiRouter } from "./routes/aiRoutes.js";

const app = express();
const PORT = Number(process.env.PORT ?? 5000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/ai", aiRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Not found." });
});

app.listen(PORT, () => {
  console.log(`[server] AIDVISOR API running on http://localhost:${PORT}`);
  void assertDbConnection();
});
