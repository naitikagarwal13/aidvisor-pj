import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#141d31] to-[#0d1526] px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_0%,transparent_75%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">
            <h2 className="text-balance font-display text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[42px]">
              Stop guessing what recruiters want.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-slate-400">
              Get your career readiness score in under two minutes. No credit
              card, no fluff — just a clear picture of where you stand.
            </p>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-6px_rgba(59,130,246,0.6)] transition-all hover:bg-blue-400"
            >
              Get your free score
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
