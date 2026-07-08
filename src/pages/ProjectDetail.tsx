import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Detail pages should open at the top, not wherever the home page was scrolled.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Keep the document title in sync for shareability + SEO.
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Adegbola Anjolaoluwa Samuel`;
    }
    return () => {
      document.title = "Adegbola Anjolaoluwa Samuel | Frontend Developer";
    };
  }, [project]);

  if (!project || !project.caseStudy) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary mb-3">
              404
            </p>
            <h1 className="text-3xl font-bold mb-4">Case study not found</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              This project doesn&apos;t have a published case study yet.
            </p>
            <Button asChild className="rounded-full">
              <Link to="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to projects
              </Link>
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  const { caseStudy } = project;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        {/* Ambient glow */}
        <div className="fixed -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

        <main className="relative z-10">
          <article className="container-custom px-6 pt-28 md:pt-32 pb-24">
            <div className="max-w-3xl mx-auto">
              {/* Back link */}
              <Link
                to="/#projects"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                All projects
              </Link>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mb-8">
                  {caseStudy.tagline}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-medium px-2.5 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Live / GitHub actions */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.liveUrl && (
                      <Button asChild className="rounded-full">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Visit live site
                          <ArrowUpRight className="ml-1.5 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Metadata strip */}
              <motion.dl
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-border/60 mb-14"
              >
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Role
                  </dt>
                  <dd className="text-sm font-semibold">{caseStudy.meta.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Timeline
                  </dt>
                  <dd className="text-sm font-semibold">{caseStudy.meta.timeline}</dd>
                </div>
                {caseStudy.meta.team && (
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                      Team
                    </dt>
                    <dd className="text-sm font-semibold">{caseStudy.meta.team}</dd>
                  </div>
                )}
              </motion.dl>

              {/* Results */}
              {caseStudy.results && caseStudy.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
                >
                  {caseStudy.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-2xl border border-border/60 bg-card p-6"
                    >
                      <p className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-1">
                        {r.value}
                      </p>
                      <p className="text-sm text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Narrative sections */}
              <div className="space-y-12">
                {caseStudy.sections.map((section, i) => (
                  <motion.section
                    key={section.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4">
                      <span className="text-primary/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      &nbsp;/&nbsp; {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.body.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-base md:text-lg text-foreground/75 leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Screenshots */}
              {caseStudy.images && caseStudy.images.length > 0 && (
                <div className="mt-16 space-y-8">
                  {caseStudy.images.map((img) => (
                    <figure key={img.src}>
                      <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-auto"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              {/* Footer CTA */}
              <div className="mt-20 pt-10 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  to="/#projects"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  Back to all projects
                </Link>
                <Button asChild className="rounded-full">
                  <Link to="/#contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectDetail;
