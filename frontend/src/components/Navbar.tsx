import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#showcase" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_4px_12px_-2px_rgba(59,130,246,0.5)]">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.25} />
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-white">
            AIDVISOR
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-[14px] font-medium text-slate-300 transition-colors hover:text-white px-3 py-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-white px-4 py-2 text-[14px] font-semibold text-[#0B1120] transition-all hover:bg-slate-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_20px_-4px_rgba(255,255,255,0.15)]"
          >
            Get Started
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#0B1120]/95 backdrop-blur-xl px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-slate-300"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
              <a href="#" className="text-[15px] font-medium text-slate-300">
                Log in
              </a>
              <a
                href="#"
                className="rounded-lg bg-white px-4 py-2.5 text-center text-[15px] font-semibold text-[#0B1120]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
