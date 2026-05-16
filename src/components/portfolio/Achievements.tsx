import { motion } from "framer-motion";
import { Award, Medal, Trophy, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { achievements, certifications } from "./data";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="05 — Achievements"
      title="Recognition & Wins"
      subtitle="Certifications, problem-solving milestones, and project highlights."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Medal className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm">
                <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg">Achievements</h3>
          </div>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
