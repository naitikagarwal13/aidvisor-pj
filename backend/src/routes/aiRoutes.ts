import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { analyzeResume, analyzeGithub, generateRoadmap } from "../ai/aiService.js";

export const aiRouter = Router();

aiRouter.use(requireAuth);

aiRouter.post("/resume-analysis", async (req, res) => {
  const { resumeText } = req.body ?? {};
  const result = await analyzeResume(resumeText ?? "");
  res.status(200).json(result);
});

aiRouter.post("/github-insights", async (req, res) => {
  const { username } = req.body ?? {};
  const result = await analyzeGithub(username ?? "");
  res.status(200).json(result);
});

aiRouter.post("/roadmap", async (req, res) => {
  const { careerGoal } = req.body ?? {};
  const result = await generateRoadmap(careerGoal ?? "");
  res.status(200).json(result);
});
