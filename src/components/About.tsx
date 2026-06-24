import { Code2, Palette, Zap } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <SectionHeading tag="#" title="about_me" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main intro card */}
          <div className="lg:col-span-2 glass rounded-3xl p-8 space-y-5 hover:shadow-xl hover:shadow-sea-300/10 transition-all duration-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sea-400 to-abyss-500 flex items-center justify-center">
                <Code2 className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-abyss-900 text-lg">
                  Frontend Developer
                </h3>
                <p className="text-abyss-500 text-sm font-mono">
                  Developer who bridges the gap between
                </p>
              </div>
            </div>

            <p className="text-abyss-600 leading-relaxed text-base">
              Frontend Developer
              ที่หลงใหลในการสร้างสรรค์ประสบการณ์การใช้งานที่ดี
              ควบคู่ไปกับการเขียน Clean Code
              และออกแบบโครงสร้างระบบที่ดูแลรักษาง่าย (Maintainable)
              ปัจจุบันกำลังต่อยอดทักษะฝั่ง Backend และ Infrastructure
              เพื่อก้าวสู่การเป็น Full-Stack Developer
              ที่เข้าใจสถาปัตยกรรมซอฟต์แวร์แบบรอบด้าน และพร้อมนําทัศนคติแบบ
              Problem-solver มาช่วยทีมส่งมอบงานที่มีคุณภาพ
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "PostgreSQL",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg glass-subtle text-sm font-mono text-abyss-600 hover:text-sea-600 hover:bg-white/40 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-6">
            <div className="glass rounded-3xl p-7 text-center hover:shadow-xl hover:shadow-sea-300/10 transition-all duration-500 group">
              <div className="text-5xl font-bold bg-gradient-to-r from-sea-500 to-cyan-glow bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                0+
              </div>
              <p className="text-abyss-500 text-sm mt-2 font-mono">
                years_of_experience
              </p>
            </div>

            <div className="glass rounded-3xl p-7 text-center hover:shadow-xl hover:shadow-sea-300/10 transition-all duration-500 group">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-glow to-sea-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                0+
              </div>
              <p className="text-abyss-500 text-sm mt-2 font-mono">
                projects_delivered
              </p>
            </div>

            <div className="flex gap-4">
              <div className="glass rounded-2xl p-4 flex-1 flex flex-col items-center gap-2 hover:shadow-lg hover:shadow-sea-300/10 transition-all duration-500">
                <Palette className="text-sea-500" size={24} />
                <span className="text-xs font-mono text-abyss-500">design</span>
              </div>
              <div className="glass rounded-2xl p-4 flex-1 flex flex-col items-center gap-2 hover:shadow-lg hover:shadow-sea-300/10 transition-all duration-500">
                <Zap className="text-sea-500" size={24} />
                <span className="text-xs font-mono text-abyss-500">
                  performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
