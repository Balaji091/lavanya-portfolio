import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Where I've Worked"
      subtitle="Internships and project work that turned theory into shipped systems."
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
            } pl-12 md:pl-0`}
          >
            <div
              className={`absolute top-3 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ${
                i % 2 === 0 ? "left-2 md:left-auto md:-right-2" : "left-2 md:-left-2"
              }`}
            />
            <div className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all shadow-card">
              <div className="flex items-center gap-2 text-xs text-primary font-mono mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                {e.period}
              </div>
              <h3 className="font-display font-semibold text-lg">{e.role}</h3>
              <div className="text-sm text-muted-foreground mb-3">{e.company}</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
