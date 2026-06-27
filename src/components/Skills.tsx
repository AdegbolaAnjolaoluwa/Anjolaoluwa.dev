import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "./ui/badge";

const skillGroups = [
  {
    category: "Frontend",
    description: "My primary domain",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    span: "lg:col-span-2",
  },
  {
    category: "Backend",
    description: "Expanding stack",
    skills: ["Go (beginner)", "Fiber", "SQL (beginner)"],
    span: "",
  },
  {
    category: "Programming",
    description: "Academic & professional",
    skills: ["Python", "Java", "R"],
    span: "",
  },
  {
    category: "Tools & Platforms",
    description: "Daily workflow",
    skills: ["Supabase", "Git & GitHub", "PostgreSQL", "VS Code", "REST APIs"],
    span: "",
  },
  {
    category: "Marketing & Strategy",
    description: "Growth & brand",
    skills: ["Digital Marketing", "Content Strategy", "Brand Positioning", "Growth Strategy", "Social Media"],
    span: "",
  },
  {
    category: "Currently Learning",
    description: "What's next",
    skills: ["Advanced Go", "SQL design", "API architecture", "Production workflows"],
    span: "lg:col-span-3",
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary text-center mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className={`p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${group.span}`}
              >
                <div className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 mb-0.5">
                    {group.description}
                  </p>
                  <p className="text-base font-bold">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
