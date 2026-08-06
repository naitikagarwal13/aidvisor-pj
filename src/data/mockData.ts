export const readiness = {
  score: 78,
  delta: 6,
  label: "Industry Ready",
};

export const subScores = [
  { key: "resume", label: "Resume", value: 82, max: 100 },
  { key: "github", label: "GitHub", value: 71, max: 100 },
  { key: "skills", label: "Skills", value: 76, max: 100 },
  { key: "interview", label: "Interview", value: 64, max: 100 },
];

export const weeklyActivity = [
  { day: "Mon", value: 32 },
  { day: "Tue", value: 48 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 65 },
  { day: "Fri", value: 58 },
  { day: "Sat", value: 74 },
  { day: "Sun", value: 69 },
];

export const skillGaps = [
  { name: "System Design", status: "missing" as const },
  { name: "Docker", status: "weak" as const },
  { name: "DSA — Graphs", status: "weak" as const },
  { name: "React", status: "strong" as const },
  { name: "SQL", status: "strong" as const },
  { name: "CI/CD", status: "missing" as const },
];

export const roadmap = [
  {
    id: "01",
    title: "Close the DSA gap",
    detail: "Graphs & DP — 12 curated problems from your weak areas",
    weeks: "Week 1–2",
    status: "active" as const,
  },
  {
    id: "02",
    title: "Ship a backend project",
    detail: "REST API with auth, tested, documented, deployed",
    weeks: "Week 3–4",
    status: "upcoming" as const,
  },
  {
    id: "03",
    title: "System design fundamentals",
    detail: "Scalability, caching, queues — with 3 mock walkthroughs",
    weeks: "Week 5–6",
    status: "upcoming" as const,
  },
  {
    id: "04",
    title: "Mock interview sprint",
    detail: "5 AI-driven technical rounds + 1 behavioral",
    weeks: "Week 7",
    status: "locked" as const,
  },
];

export const recentActivity = [
  { id: 1, text: "Resume re-scanned — Experience section improved", time: "2h ago", tone: "positive" as const },
  { id: 2, text: "GitHub sync found 3 new repositories", time: "6h ago", tone: "neutral" as const },
  { id: 3, text: "Skill gap detected — Docker", time: "1d ago", tone: "warning" as const },
  { id: 4, text: "Mock interview completed — 82% clarity score", time: "2d ago", tone: "positive" as const },
];

export const aiSuggestions = [
  "Your GitHub commits drop on weekends — ship something small on Saturdays to keep your graph consistent.",
  "Add measurable outcomes to your resume's project section — recruiters scan for numbers first.",
  "You're strong in React but missing backend depth. One full-stack project would round out your profile fast.",
];

export const projectRecommendations = [
  {
    title: "Distributed Rate Limiter",
    tags: ["Go", "Redis", "System Design"],
    fit: 94,
    reason: "Fills your System Design gap and pairs with your backend goal",
  },
  {
    title: "Resume Parser API",
    tags: ["Python", "FastAPI", "NLP"],
    fit: 88,
    reason: "Matches your AI/ML interest with a portfolio-ready use case",
  },
  {
    title: "Realtime Kanban Board",
    tags: ["React", "WebSockets", "PostgreSQL"],
    fit: 81,
    reason: "Builds on your strongest stack — React & SQL",
  },
];

export const featureHighlights = [
  {
    id: "resume",
    title: "Resume Intelligence",
    description:
      "Line-by-line analysis benchmarked against roles you're targeting — not generic keyword scoring.",
    stat: "82",
    statLabel: "avg. score lift",
  },
  {
    id: "github",
    title: "GitHub Analysis",
    description:
      "Reads your commit history, code quality, and repo structure to score real engineering signal.",
    stat: "40+",
    statLabel: "signals scanned",
  },
  {
    id: "roadmap",
    title: "AI Roadmap",
    description:
      "A weekly plan generated from your actual gaps — not a generic syllabus everyone gets.",
    stat: "6–8wk",
    statLabel: "to placement-ready",
  },
  {
    id: "readiness",
    title: "Career Readiness",
    description:
      "One score that fuses resume, code, skills, and interview performance into a single number recruiters trust.",
    stat: "1",
    statLabel: "unified score",
  },
];

export const howItWorks = [
  {
    step: "Upload Resume",
    detail: "Drop in a PDF. We extract structure, experience, and impact — in seconds.",
  },
  {
    step: "Connect GitHub",
    detail: "Authorize read access. We analyze commits, languages, and repo depth.",
  },
  {
    step: "AI Analysis",
    detail: "Your resume, code, and goals are cross-referenced against real hiring bars.",
  },
  {
    step: "Career Roadmap",
    detail: "Get a personalized, week-by-week plan — updated as you grow.",
  },
];
