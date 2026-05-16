import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} {personal.name}. Crafted with React, Tailwind & Framer Motion.
        </div>
        <div className="flex items-center gap-3">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all">
            <Github className="w-4 h-4" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="p-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
