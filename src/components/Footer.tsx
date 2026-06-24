import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-sea-200/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-sm text-abyss-500 font-mono">
          © {year}{" "}
          <span className="text-abyss-700 font-semibold">Alatusz.Dev</span>
          <span className="text-abyss-400">—</span>
          Crafted with{" "}
          <Heart size={14} className="text-terminal-red fill-terminal-red" /> &
          code
        </p>

        <div className="flex items-center gap-1 text-xs font-mono text-abyss-400">
          <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-glow-pulse" />
          built_with React + TypeScript + Tailwind
        </div>
      </div>
    </footer>
  );
}
