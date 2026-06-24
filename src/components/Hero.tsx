import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@thesvg/react";

/* ── Mac Terminal Component ── */
function MacTerminal() {
  const lines = [
    { prompt: true, text: "whoami" },
    { output: true, text: "creative_developer // full-stack enthusiast" },
    { prompt: true, text: "cat skills.json | jq .frontend" },
    { output: true, text: '["React", "TypeScript", "Next.js", "Tailwind"]' },
    { prompt: true, text: "echo $PASSION" },
    { output: true, text: "Building beautiful, performant web experiences" },
    { prompt: true, text: "uptime --creative" },
    { output: true, text: "creative_uptime: 6+ years and counting..." },
    { prompt: true, text: "" },
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          // Reset after a pause
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="glass-dark rounded-2xl overflow-hidden shadow-2xl shadow-abyss-950/40 w-full max-w-md">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-header/80 border-b border-white/5">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-terminal-red" />
          <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
          <span className="w-3 h-3 rounded-full bg-terminal-green" />
        </div>
        <span className="text-terminal-text/60 text-xs font-mono ml-2">
          ~/alatusz.dev — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[240px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-1">
            {line.prompt ? (
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">❯</span>
                <span className="text-terminal-text">{line.text}</span>
                {i === visibleLines - 1 && (
                  <span className="w-2 h-4 bg-terminal-green/70 animate-blink inline-block" />
                )}
              </div>
            ) : (
              <div className="text-terminal-blue/80 pl-4">{line.text}</div>
            )}
          </div>
        ))}
        {visibleLines === 0 && (
          <div className="flex items-center gap-2">
            <span className="text-terminal-green">❯</span>
            <span className="w-2 h-4 bg-terminal-green/70 animate-blink inline-block" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Hero Section ── */
export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Animated background orbs */}
      <div
        className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-sea-300/20 blur-3xl animate-wave pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      />
      <div
        className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-abyss-300/20 blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-sea-200/15 to-transparent blur-2xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        {/* Left — Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-mono text-abyss-600">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-glow-pulse" />
            available_for_hire
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-abyss-900">Building</span>
            <br />
            <span className="bg-gradient-to-r from-sea-400 via-cyan-glow to-teal-glow bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              crystalline
            </span>
            <br />
            <span className="text-abyss-900">
              interfaces
              <br />
              for the modern
              <br />
              web.
            </span>
          </h1>

          <p className="text-abyss-500 text-lg max-w-md leading-relaxed">
            I'm a full-stack developer who transforms complex ideas into
            elegant, performant digital experiences with clean code and
            pixel-perfect attention to detail.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sea-500 to-abyss-600 text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sea-500/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Hire me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sea-400 to-sea-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#projects"
              className="glass px-7 py-3.5 rounded-2xl text-abyss-700 font-semibold text-sm hover:bg-white/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              ↗ See my work
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-subtle text-abyss-500 hover:text-sea-600 hover:bg-white/40 transition-all duration-300"
            >
              <Github className="h-6 w-6 bg-white rounded-full p-0.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-subtle text-abyss-500 hover:text-sea-600 hover:bg-white/40 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="flex justify-center lg:justify-end animate-float">
          <MacTerminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-abyss-400 animate-float">
        <ArrowDown size={20} className="opacity-60" />
      </div>
    </section>
  );
}
