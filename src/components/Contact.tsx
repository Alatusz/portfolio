import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <SectionHeading tag="#" title="contact" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-abyss-900 leading-tight">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-sea-400 to-teal-glow bg-clip-text text-transparent">
                  luminous
                </span>
                .
              </h3>
              <p className="text-abyss-500 mt-4 leading-relaxed">
                Have a project in mind or want to collaborate? Drop me a message
                and I'll get back to you within 24 hours. I'm always excited to
                discuss new ideas and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "alatusz.dev@gmail.com",
                  href: "mailto:alatusz.dev@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Mueang Chanthaburi, Chanthaburi, Thailand",
                  href: "#",
                },
                {
                  icon: Phone,
                  label: "+66 82 003 4253",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 glass rounded-2xl px-5 py-4 hover:bg-white/40 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sea-400 to-abyss-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-sea-400/30 transition-all duration-300">
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="text-abyss-600 font-medium text-sm">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form (Mac Terminal style) */}
          <div className="glass-dark rounded-3xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3 bg-terminal-header/80 border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-terminal-red" />
                <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
                <span className="w-3 h-3 rounded-full bg-terminal-green" />
              </div>
              <span className="text-terminal-text/60 text-xs font-mono ml-2">
                ~/contact — mail
              </span>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block font-mono text-xs text-terminal-comment mb-2">
                  // name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-terminal-text placeholder-terminal-comment/50 font-mono focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/30 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-terminal-comment mb-2">
                  // email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-terminal-text placeholder-terminal-comment/50 font-mono focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/30 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-terminal-comment mb-2">
                  // message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-terminal-text placeholder-terminal-comment/50 font-mono focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/30 transition-all duration-300 resize-none"
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={submitted}
                className={`w-full py-3.5 rounded-xl font-mono text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? "bg-terminal-green/20 text-terminal-green border border-terminal-green/30"
                    : "bg-gradient-to-r from-sea-500 to-abyss-600 text-white hover:shadow-lg hover:shadow-sea-500/30 hover:-translate-y-0.5"
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    message_sent ✓
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    send_message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
