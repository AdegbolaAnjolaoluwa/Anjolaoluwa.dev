import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Film, Code2, Rocket } from "lucide-react";

const timelineData = [
  {
    year: "2026 — Present",
    title: "Front End Developer & Marketing Strategist",
    organization: "Stackle Vest",
    description: "Dual role combining frontend engineering with strategic marketing.",
    highlights: [
      "Building and maintaining responsive web interfaces",
      "Developing and executing digital marketing strategies",
      "Bridging design, development, and growth objectives",
      "Collaborating cross-functionally across product and marketing teams",
    ],
    icon: Briefcase,
  },
  {
    year: "2023 — Present (Final Year)",
    title: "Computer Science Student",
    organization: "Nile University",
    description: "Final year Computer Science student — expected graduation 2027",
    highlights: [
      "Focus on software engineering and system design",
      "Academic work in Python, Java, and R",
      "Building practical projects alongside coursework",
    ],
    icon: GraduationCap,
  },
  {
    year: "2022 — Present",
    title: "Videography & Creative Production",
    organization: "Independent Work",
    description: "Growing as a visual storyteller with a focus on clean, stable, and high quality video production.",
    highlights: [
      "Proficient videography with strong understanding of composition and lighting",
      "Skilled use of gimbal stabilizers for smooth, cinematic motion",
      "Video editing with attention to pacing, storytelling, and color balance",
      "Experience capturing and producing content using compact/mobile setups",
    ],
    icon: Film,
  },
  {
    year: "2024 — 2025",
    title: "Meta Front-End Developer Program",
    organization: "Professional Certification",
    description: "Completed comprehensive frontend development training",
    highlights: [
      "Advanced React and component architecture",
      "Modern web development best practices",
      "UX/UI principles and responsive design",
    ],
    icon: Code2,
  },
  {
    year: "2025 — Present",
    title: "Backend Development Journey",
    organization: "Self Directed Learning",
    description: "Expanding into full stack development",
    highlights: [
      "Go + Fiber API development",
      "SQL database design and management",
      "RESTful API architecture",
      "Production workflow understanding",
    ],
    icon: Rocket,
  },
];

export const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary text-center mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            My journey through professional roles, formal education, and continuous
            self-improvement.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-base md:text-lg font-bold leading-tight">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.organization}</p>
                        </div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start flex-shrink-0">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-sm text-foreground/55 mb-4">{item.description}</p>

                      <ul className="space-y-1.5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/65">
                            <span className="text-primary mt-0.5 flex-shrink-0 font-bold">›</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
