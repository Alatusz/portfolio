import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import { Palette, Settings, PenTool, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Settings,
    skills: [
      "MySQL",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Prisma ORM",
      "RESTful APIs",
    ],
  },
  {
    title: "Design",
    icon: PenTool,
    skills: ["Figma"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Antigravity", "Git Hub", "Git Lab", "Bruno", "Notion", "Docker"],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <SectionHeading tag="#" title="skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass rounded-3xl p-7 hover:shadow-xl hover:shadow-sea-300/10 hover:-translate-y-1 transition-all duration-500 group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-sea-400 to-abyss-500 text-white shadow-lg shadow-sea-500/20 group-hover:shadow-sea-400/40 group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-mono font-bold text-abyss-900 text-base group-hover:text-sea-600 transition-colors duration-300">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-abyss-600 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sea-400 group-hover/item:bg-cyan-glow group-hover/item:shadow-sm group-hover/item:shadow-cyan-glow/50 transition-all duration-300" />
                      <span className="group-hover/item:text-abyss-800 transition-colors duration-200">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
