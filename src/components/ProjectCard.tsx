import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              <CardDescription className="text-base font-medium text-primary">
                {role}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {githubUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            {shortDescription}
          </p>

          <div className="space-y-3">
            <p className="text-sm leading-relaxed">{detailedDescription}</p>

            <div>
              <h4 className="text-sm font-semibold mb-2">Key Focus Areas:</h4>
              <ul className="space-y-1.5">
                {keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
