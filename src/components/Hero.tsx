import { ArrowRight, PlayCircle } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:px-8">
        <div className="animate-fade-up">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-slate-300 transition-colors hover:border-white/[0.15] hover:text-white"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built for the class of 2026
          </a>

          <h1 className="mt-6 text-balance font-display text-[44px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[56px] lg:text-[60px]">
            Build your career
            <br />
            before graduation.
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-400">
            AIDVISOR reads your resume, your GitHub, and your goals — then tells
            you exactly what's missing and how to fix it. One score. One
            roadmap. Zero guesswork.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-6px_rgba(59,130,246,0.6)] transition-all hover:bg-blue-400 hover:shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_10px_28px_-4px_rgba(59,130,246,0.7)]"
            >
              Get your readiness score
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-6 py-3.5 text-[14.5px] font-semibold text-slate-200 transition-colors hover:border-white/[0.15] hover:bg-white/[0.04]"
            >
              <PlayCircle className="h-4 w-4" />
              See it in action
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2.5">
              {["#3B82F6", "#6366F1", "#34D399", "#FBBF24"].map((c, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full ring-2 ring-[#0B1120]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-[13px] text-slate-400">
              <span className="font-mono font-medium text-white">2,400+</span> students already on track
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
