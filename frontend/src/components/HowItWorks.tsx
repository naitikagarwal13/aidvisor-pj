import { FileUp, GitBranch, BrainCircuit, Map } from "lucide-react";
import { howItWorks } from "../data/mockData";

const icons = [FileUp, GitBranch, BrainCircuit, Map];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[13px] font-medium uppercase tracking-wider text-blue-400">
            Process
          </p>
          <h2 className="mt-3 text-balance font-display text-[34px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
            From upload to offer-ready.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent lg:block" />

          {howItWorks.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#111827] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)]">
                    <Icon className="h-5 w-5 text-blue-400" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[12px] text-slate-600 lg:absolute lg:right-0 lg:top-4">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-[15.5px] font-semibold text-white">{step.step}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
