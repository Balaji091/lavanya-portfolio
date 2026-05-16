import { motion } from "framer-motion";
import {
  Sparkles,
  Languages,
  Microscope,
  LineChart,
  PenTool,
  Activity,
  Leaf,
  Github,
} from "lucide-react";
import { Section } from "./Section";
import { projects } from "./data";
import { personal } from "./data";

const iconMap = {
  Sparkles,
  Languages,
  Microscope,
  LineChart,
  PenTool,
  Activity,
  Leaf,
};

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Selected Work"
      subtitle="A snapshot of AI/ML and GenAI projects I've built end-to-end."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const Icon = iconMap[p.icon as keyof typeof iconMap] ?? Sparkles;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all shadow-card overflow-hidden ${
                p.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-primary opacity-10 blur-3xl rounded-full group-hover:opacity-30 transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  {p.featured && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
