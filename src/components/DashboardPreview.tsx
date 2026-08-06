import { GitBranch, FileText, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, YAxis } from "recharts";
import { ReadinessRing } from "./ReadinessRing";
import { readiness, subScores, weeklyActivity, skillGaps, aiSuggestions } from "../data/mockData";

const statusColor: Record<string, string> = {
  strong: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20",
  weak: "text-amber-400 bg-amber-400/10 ring-amber-400/20",
  missing: "text-slate-400 bg-slate-400/10 ring-slate-400/20",
};

export function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[600px]">
      {/* ambient glow behind the panel */}
      <div className="pointer-events-none absolute -inset-16 -z-10">
        <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="animate-float">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {/* chrome bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-400">
              app.aidvisor.ai/dashboard
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-medium text-slate-400">Live</span>
            </div>
          </div>

          {/* body */}
          <div className="grid grid-cols-6 gap-3 p-4">
            {/* readiness score card */}
            <div className="relative col-span-6 flex items-center gap-5 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:col-span-4">
              <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
              <ReadinessRing score={readiness.score} size={116} strokeWidth={8} label="" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-2xl font-medium text-white">{readiness.score}%</p>
                  <span className="flex items-center gap-0.5 rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-400">
                    <ArrowUpRight className="h-3 w-3" />
                    {readiness.delta}
                  </span>
                </div>
                <p className="mt-1 text-[13px] font-medium text-white">Career Readiness</p>
                <p className="mt-0.5 text-[12px] text-slate-400">Top 18% of your cohort</p>
              </div>
            </div>

            {/* weekly progress */}
            <div className="col-span-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-medium text-slate-300">Weekly Progress</p>
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <div className="mt-3 h-14 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivity} barCategoryGap={4}>
                    <YAxis hide domain={[0, 100]} />
                    <Bar dataKey="value" radius={[3, 3, 0, 0]} fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-1 font-mono text-[11px] text-slate-500">+41% vs last week</p>
            </div>

            {/* resume + github mini scores */}
            {subScores.slice(0, 2).map((s) => (
              <div key={s.key} className="col-span-6 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 sm:col-span-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  {s.key === "resume" ? (
                    <FileText className="h-4 w-4 text-blue-400" />
                  ) : (
                    <GitBranch className="h-4 w-4 text-blue-400" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-medium text-slate-300">{s.label} Score</p>
                    <p className="font-mono text-[13px] font-medium text-white">{s.value}</p>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* skill tags */}
            <div className="col-span-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="mb-3 text-[12px] font-medium text-slate-300">Skill Gap Detection</p>
              <div className="flex flex-wrap gap-2">
                {skillGaps.map((s) => (
                  <span
                    key={s.name}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusColor[s.status]}`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* AI suggestion */}
            <div className="col-span-6 flex items-start gap-3 rounded-xl border border-blue-500/[0.15] bg-blue-500/[0.05] p-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              </div>
              <p className="text-[12.5px] leading-relaxed text-slate-300">
                {aiSuggestions[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
