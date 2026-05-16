import { motion } from "framer-motion";
import { Brain, Code2, Rocket, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Brain, label: "AI / ML", desc: "Hands-on with ML, DL & CNN" },
  { icon: Rocket, label: "GenAI", desc: "LLMs, RAG & LangChain" },
  { icon: Code2, label: "Python", desc: "Production-grade Python dev" },
  { icon: GraduationCap, label: "CS Student", desc: "AI/IoT internship work" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I&apos;m a Computer Science student and aspiring{" "}
            <span className="text-foreground font-medium">AI/ML Engineer</span> with hands-on
            experience building intelligent systems through internships and real-world
            projects. My focus is on shipping production-style ML and Generative AI
            applications — not just notebooks.
          </p>
          <p>
            During my internship at <span className="text-foreground font-medium">HeyBobo</span>,
            I worked on AI/ML tasks and gained exposure to{" "}
            <span className="text-foreground font-medium">LLM-based applications</span> and
            modern AI workflows powered by Python. At{" "}
            <span className="text-foreground font-medium">JNTU Kakinada</span>, I built a{" "}
            <span className="text-foreground font-medium">Smart Seed Drying System</span>{" "}
            combining AI and IoT concepts to solve a real agricultural problem.
          </p>
          <p>
            I&apos;m passionate about{" "}
            <span className="text-foreground font-medium">
              Generative AI, LLMs, RAG pipelines, computer vision and applied machine learning
            </span>
            . I love turning complex problems into clean, reliable AI products and I&apos;m
            actively looking for opportunities where I can ship impact from day one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                <h.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="font-semibold">{h.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{h.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
