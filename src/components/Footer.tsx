import { Sparkles } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Resume Intelligence", "GitHub Analysis", "AI Roadmap", "Career Readiness"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Changelog", "Support"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-white">
                AIDVISOR
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-500">
              AI career intelligence for engineering students. Built to close
              the gap between college and industry.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-medium uppercase tracking-wider text-slate-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13.5px] text-slate-400 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-[12.5px] text-slate-500">
            © 2026 AIDVISOR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[12.5px] text-slate-500 hover:text-white">Privacy</a>
            <a href="#" className="text-[12.5px] text-slate-500 hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
