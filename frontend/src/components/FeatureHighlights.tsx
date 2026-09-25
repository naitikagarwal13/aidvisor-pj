import type { ElementType } from "react";
import { FileText, GitBranch, Map, Target } from "lucide-react";
import { featureHighlights } from "../data/mockData";

const icons: Record<string, ElementType> = {
  resume: FileText,
  github: GitBranch,
  roadmap: Map,
  readiness: Target,
};

export function FeatureHighlights() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[13px] font-medium uppercase tracking-wider text-blue-400">
            Capabilities
          </p>
          <h2 className="mt-3 text-balance font-display text-[34px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
            Four systems. One verdict on where you stand.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featureHighlights.map((f) => {
            const Icon = icons[f.id];
            return (
              <div
                key={f.id}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111827] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#131c2e]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/0 blur-2xl transition-colors duration-300 group-hover:bg-blue-500/10" />

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-inset ring-blue-500/15">
                  <Icon className="h-[18px] w-[18px] text-blue-400" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-[16px] font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  {f.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[22px] font-medium text-white">{f.stat}</span>
                  <span className="text-[12px] text-slate-500">{f.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
