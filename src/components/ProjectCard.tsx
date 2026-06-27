import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  role: string;
  stack: string[];
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  role,
  stack,
  shortDescription,
  detailedDescription,
  keyFeatures,
  liveUrl,
  githubUrl,
  index,
  featured,
}: ProjectCardProps) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={featured ? "lg:col-span-2" : ""}
    >
      <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-7 md:p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold tracking-[0.2em] text-primary/50 mb-2 block">{num}</span>
              <h3 className="text-xl md:text-2xl font-bold mb-1.5 leading-tight">{title}</h3>
              <p className="text-sm font-semibold text-primary">{role}</p>
            </div>
            {(githubUrl || liveUrl) && (
              <div className="flex gap-1 ml-4 flex-shrink-0">
                {githubUrl && (
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {liveUrl && (
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-medium px-2.5 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/55 font-medium mb-3">{shortDescription}</p>
          <p className="text-sm text-foreground/75 leading-relaxed mb-6">{detailedDescription}</p>

          {/* Features */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Key Focus Areas
            </p>
            <ul className="space-y-2">
              {keyFeatures.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground/65">
                  <span className="text-primary mt-0.5 flex-shrink-0 font-bold">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
