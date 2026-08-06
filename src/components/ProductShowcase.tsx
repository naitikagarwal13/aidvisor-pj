import { Circle, Lock, MessagesSquare, Sparkles } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { roadmap, recentActivity, projectRecommendations, subScores } from "../data/mockData";
import { ReadinessRing } from "./ReadinessRing";

const radarData = subScores.map((s) => ({ subject: s.label, value: s.value, full: 100 }));

const activityDot: Record<string, string> = {
  positive: "bg-emerald-400",
  warning: "bg-amber-400",
  neutral: "bg-blue-400",
};

const roadmapIcon = {
  active: <span className="relative flex h-4 w-4 items-center justify-center"><span className="absolute h-4 w-4 rounded-full bg-blue-500/30 animate-pulse-ring" /><span className="h-2 w-2 rounded-full bg-blue-400" /></span>,
  upcoming: <Circle className="h-4 w-4 text-slate-500" strokeWidth={1.75} />,
  locked: <Lock className="h-3.5 w-3.5 text-slate-600" strokeWidth={1.75} />,
};

export function ProductShowcase() {
  return (
    <section id="showcase" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[400px] bg-gradient-to-b from-blue-600/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[13px] font-medium uppercase tracking-wider text-blue-400">
            The full picture
          </p>
          <h2 className="mt-3 text-balance font-display text-[34px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
            Your entire career, in one workspace.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-400">
            Every widget below updates in real time as you upload work, ship
            code, and complete roadmap steps.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Roadmap */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 lg:col-span-7">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold text-white">Personalized Learning Roadmap</h3>
              <span className="font-mono text-[11px] text-slate-500">7 weeks</span>
            </div>
            <div className="mt-6 space-y-0">
              {roadmap.map((r, i) => (
                <div key={r.id} className="relative flex gap-4 pb-7 last:pb-0">
                  {i !== roadmap.length - 1 && (
                    <span className="absolute left-[7px] top-5 h-full w-px bg-white/[0.08]" />
                  )}
                  <div className="relative z-10 mt-0.5 flex h-4 w-4 items-center justify-center">
                    {roadmapIcon[r.status]}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className={`text-[14px] font-medium ${r.status === "locked" ? "text-slate-500" : "text-white"}`}>
                        {r.title}
                      </p>
                      <span className="font-mono text-[11px] text-slate-500">{r.weeks}</span>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview readiness + radar */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 lg:col-span-5">
            <h3 className="text-[15px] font-semibold text-white">Interview Readiness</h3>
            <div className="mt-4 flex items-center justify-between gap-4">
              <ReadinessRing score={subScores[3].value} size={104} strokeWidth={8} label="Mock avg" />
              <div className="h-[140px] w-[55%]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="75%">
                    <PolarGrid stroke="rgba(148,163,184,0.15)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#94A3B8", fontSize: 10 }}
                    />
                    <Radar
                      dataKey="value"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.25}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <MessagesSquare className="h-3.5 w-3.5 shrink-0 text-blue-400" />
              <p className="text-[12px] leading-relaxed text-slate-400">
                Next mock round: <span className="text-slate-200">System Design — scheduled Thu</span>
              </p>
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 lg:col-span-5">
            <h3 className="text-[15px] font-semibold text-white">Recent Activity</h3>
            <div className="mt-5 space-y-4">
              {recentActivity.map((a) => (
                <div key={a.id} className="flex items-start gap-3">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${activityDot[a.tone]}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] leading-snug text-slate-300">{a.text}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-slate-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project recommendations */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 lg:col-span-7">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold text-white">Project Recommendations</h3>
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            </div>
            <div className="mt-5 space-y-3">
              {projectRecommendations.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.12]"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[13.5px] font-medium text-white">{p.title}</p>
                      <div className="flex gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-slate-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-400">{p.reason}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end">
                    <span className="font-mono text-[15px] font-medium text-emerald-400">{p.fit}%</span>
                    <span className="text-[10px] text-slate-500">fit</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
