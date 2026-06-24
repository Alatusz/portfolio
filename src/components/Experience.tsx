import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

interface TimelineItem {
  type: "work" | "education" | "internship";
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "education",
    period: "2022 — 2026",
    title: "Computer Science",
    org: "RBRU",
    description:
      "Specialized in Human-Computer Interaction and Advanced Web Technologies.",
    tags: [
      "Web Design",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "AI",
      "Machine Learning",
      "Digital Image Processing",
      "Python",
      "Java",
      "C++",
      "SQL",
      "Html",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    type: "internship",
    period: "2025 — 2025",
    title: "Frontend Developer",
    org: "Lexnetix Co.,Ltd.",
    description:
      "Crafted responsive, accessible interfaces for high-profile clients including e-commerce platforms and content management systems.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Figma", "Git"],
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <SectionHeading tag="#" title="experience_/_education" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sea-300/60 via-sea-400/40 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-16 md:pl-20 group">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-6 top-7 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                    item.type === "work"
                      ? "bg-sea-400 border-sea-300 group-hover:shadow-lg group-hover:shadow-sea-400/40"
                      : "bg-abyss-400 border-abyss-300 group-hover:shadow-lg group-hover:shadow-abyss-400/40"
                  }`}
                />

                <div className="glass rounded-3xl p-7 hover:shadow-xl hover:shadow-sea-300/10 hover:-translate-y-0.5 transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-sea-600 bg-sea-100/40 px-3 py-1 rounded-lg">
                      {item.period}
                    </span>
                    {item.type === "work" ? (
                      <Briefcase size={16} className="text-sea-500" />
                    ) : (
                      <GraduationCap size={16} className="text-abyss-500" />
                    )}
                  </div>

                  <h3 className="font-bold text-abyss-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sea-600 font-medium text-sm mb-3 font-mono">
                    @ {item.org}
                  </p>
                  <p className="text-abyss-500 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-sea-100/40 text-xs font-mono text-sea-700 border border-sea-200/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
