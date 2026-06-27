import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
  },
    {
  "year": "2022–Present",
  "title": "Videography & Creative Production",
  "organization": "Independent Work",
  "description": "Growing as a visual storyteller with a focus on clean, stable, and high quality video production.",
  "highlights": [
    "Proficient videography with strong understanding of composition and lighting",
    "Skilled use of gimbal stabilizers for smooth, cinematic motion",
    "Video editing with attention to pacing, storytelling, and color balance",
    "Experience capturing and producing content using compact/mobile setups when needed"
  ],
},

  {
    year: "2024–2025",
    title: "Meta Front-End Developer Program",
    organization: "Professional Certification",
    description: "Completed comprehensive frontend development training",
    highlights: [
      "Advanced React and component architecture",
      "Modern web development best practices",
      "UX/UI principles and responsive design",
    ],
  },
  {
    year: "2025–Present",
    title: "Backend Development Journey",
    organization: "Self Directed Learning",
    description: "Expanding into full stack development",
    highlights: [
      "Go + Fiber API development",
      "SQL database design and management",
      "RESTful API architecture",
      "Production workflow understanding",
    ],
  },

  {
    year: "Ongoing",
    title: "Continuous Growth",
    organization: "Professional Development",
    description: "Building production ready systems",
    highlights: [
      "Real world project experience",
      "Clean code practices and attention to detail",
      "Scalable system design",
      "User centered development approach",
    ],
  },
];

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My journey through formal education, professional training, and
            continuous self improvement.
          </p>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 transform md:-translate-x-1/2 hidden sm:block" />

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] sm:ml-8 md:ml-0">
                    <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                      <CardHeader>
                        <div className="text-sm font-semibold text-primary mb-2">
                          {item.year}
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {item.organization}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">{item.description}</p>
                        <ul className="space-y-1.5">
                          {item.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-primary mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
