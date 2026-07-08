import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { reveal, revealViewport } from "@/lib/motion";

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
            <span className="text-primary/50">02</span> &nbsp;/&nbsp; Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            A selection of work spanning frontend engineering, system design, and
            full stack integration.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                role={project.role}
                stack={project.stack}
                shortDescription={project.shortDescription}
                detailedDescription={project.detailedDescription}
                keyFeatures={project.keyFeatures}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                hasCaseStudy={Boolean(project.caseStudy)}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
