import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import { Github } from "@thesvg/react";
import WeatherDashboard from "../assets/projects/WeatherDashboard.png";
import Authentication from "../assets/projects/Authentication.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Mini E-Commerce Web Application",
    description:
      "- พัฒนาระบบร้านค้าออนไลน์แบบครบวงจร (End-to-End) ตั้งแต่การออกแบบ UI/UX, การจัดการฐานข้อมูล, ไปจนถึงการเตรียมความพร้อมระบบสําหรับการขึ้นใช้งานจริง - สร้างระบบตะกร้าสินค้าและฟังก์ชันค้นหา โดยใช้ React Query ในการจัดการ Server-State เพื่อเพิ่มประสิทธิภาพการดึงข้อมูลจาก API Data Fetching และทำระบบ Caching ช่วยให้แอปพลิเคชันทำงานได้อย่างลื่นไหล - ออกแบบโครงสร้างฐานข้อมูลด้วย Prisma ORM และพัฒนา RESTful API เพื่อใช้สำหรับระบบเพิ่ม/ลดสต็อกสินค้า - พัฒนาระบบยืนยันตัวตน (Authentication) และ RBAC เพื่อแยกสิทธิ์ระหว่างผู้ใช้งานทั่วไปและผู้ดูแลระบบ (Admin)",
    tags: ["React", "TypeScript", "TailwindCSS", "Prisma", "Shadcn UI"],
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=E-Commerce+Project",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A premium weather dashboard featuring real-time data, 7-day forecasts, air quality index, and multi-city comparison with a stunning glassmorphism design.",
    tags: ["React", "TypeScript", "Tailwind", "Playwright"],
    image: WeatherDashboard,
    github: "#",
    live: "#",
  },
  {
    title: "Authentication System",
    description:
      "A premium authentication system featuring email login, registration, OAuth, email verification, and password recovery",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Playwright",
      "Node.js",
      "MySQL",
      "Prisma",
    ],
    image: Authentication,
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <SectionHeading tag="#" title="projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group glass rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-sea-300/10 hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div>
                {project.image && (
                  <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-lg font-bold text-abyss-900 group-hover:text-sea-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-2 rounded-xl glass-subtle text-abyss-400 hover:text-sea-600 hover:bg-white/40 transition-all duration-200"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github className="h-6 w-6 bg-white rounded-full p-0.5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="p-2 rounded-xl glass-subtle text-abyss-400 hover:text-sea-600 hover:bg-white/40 transition-all duration-200"
                        aria-label={`Live demo - ${project.title}`}
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-abyss-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-sea-100/40 text-xs font-mono text-sea-700 border border-sea-200/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
