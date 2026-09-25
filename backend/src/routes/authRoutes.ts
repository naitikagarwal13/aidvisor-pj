import { Router } from "express";
import { signup, login, me, completeOnboarding } from "../controllers/authController.js";
import { requireAuth } from "../middleware/requireAuth.js";

export const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/me", requireAuth, me);
authRouter.post("/onboarding", requireAuth, completeOnboarding);

// Logout is stateless (JWT is discarded client-side). This endpoint exists
// so the frontend has a consistent API to call and so a token-blacklist /
// refresh-token strategy can be dropped in later without changing the client.
authRouter.post("/logout", requireAuth, (_req, res) => {
  res.status(200).json({ message: "Logged out." });
});
