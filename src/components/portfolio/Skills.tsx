import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups, codingProfiles } from "./data";
import { Code, Trophy } from "lucide-react";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Technical Toolkit"
      subtitle="A pragmatic stack for building, shipping and scaling AI/ML and GenAI products."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-all"
          >
            <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary" />
              {group.title}
            </h3>
            <div className="space-y-4">
              {group.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {codingProfiles.map((p, i) => (
          <motion.div
            key={p.platform}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-gradient-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-primary/20 border border-primary/30 flex items-center justify-center">
              {i === 0 ? (
                <Trophy className="w-6 h-6 text-primary" />
              ) : (
                <Code className="w-6 h-6 text-primary" />
              )}
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient font-display">{p.count}</div>
              <div className="text-sm text-muted-foreground">
                {p.platform} · {p.note}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
