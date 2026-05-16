import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Section } from "./Section";
import { personal } from "./data";

export function Contact() {
  const contacts = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lavanya-mallela-544b0b299",
      href: personal.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mallelalavanya",
      href: personal.github,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's Build Something"
      subtitle="Open to AI/ML, GenAI, Python and SDE roles. Always happy to talk shop."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto"
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
              <c.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">{c.label}</div>
              <div className="text-sm font-medium truncate">{c.value}</div>
            </div>
          </a>
        ))}
      </motion.div>
    </Section>
  );
}
