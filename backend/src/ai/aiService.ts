// Reserved integration point for AI features (resume analysis, GitHub
// intelligence, roadmap generation, interview prep, etc).
//
// To wire up a real model:
//   1. Add ANTHROPIC_API_KEY (or OPENAI_API_KEY) to .env
//   2. `npm install @anthropic-ai/sdk` (or `openai`)
//   3. Replace the mock bodies below with real API calls
//   4. Optionally persist results via the `ai_insights` table (schema.sql)
//
// Every function here already returns the shape the frontend expects, so
// swapping the implementation won't require any route or client changes.

export interface ResumeAnalysis {
  score: number;
  strengths: string[];
  gaps: string[];
  summary: string;
}

export interface GithubAnalysis {
  score: number;
  languages: string[];
  activityLevel: "low" | "moderate" | "high";
  summary: string;
}

export interface RoadmapStep {
  title: string;
  detail: string;
  weeks: string;
}

export async function analyzeResume(_resumeText: string): Promise<ResumeAnalysis> {
  // TODO: replace with a real model call, e.g.:
  // const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  // const response = await client.messages.create({ ... });
  return {
    score: 78,
    strengths: ["Clear project descriptions", "Consistent formatting"],
    gaps: ["Missing measurable outcomes", "No backend/system design projects"],
    summary: "Mock analysis — connect a real model in src/ai/aiService.ts.",
  };
}

export async function analyzeGithub(_username: string): Promise<GithubAnalysis> {
  return {
    score: 71,
    languages: ["TypeScript", "Python"],
    activityLevel: "moderate",
    summary: "Mock analysis — connect a real model in src/ai/aiService.ts.",
  };
}

export async function generateRoadmap(_careerGoal: string): Promise<RoadmapStep[]> {
  return [
    {
      title: "Close the DSA gap",
      detail: "Graphs & DP — curated problems based on your weak areas",
      weeks: "Week 1–2",
    },
    {
      title: "Ship a project",
      detail: "A project targeted at your chosen career goal",
      weeks: "Week 3–4",
    },
  ];
}
