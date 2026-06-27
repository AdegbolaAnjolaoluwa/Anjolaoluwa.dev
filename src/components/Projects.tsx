import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Stackle Vest",
    role: "Front End Developer & Marketing Strategist",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    shortDescription:
      "A professional role combining frontend engineering and digital marketing strategy.",
    detailedDescription:
      "At Stackle Vest, I operate in a dual capacity — building and maintaining responsive, high-quality web interfaces while also developing and executing digital marketing strategies. My work bridges the gap between product and growth, ensuring that what we build is both technically sound and effectively positioned in the market.",
    keyFeatures: [
      "Building and maintaining responsive web interfaces",
      "Developing and executing digital marketing strategies",
      "Bridging design, development, and growth objectives",
      "Collaborating cross-functionally across product and marketing teams",
    ],
  },
  {
    title: "ConsultifyCare Telemedicine Platform",
    role: "Front End Developer & Co-founder",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Go (Fiber)"],
    shortDescription:
      "A developing telemedicine platform focused on improving digital access to healthcare.",
    detailedDescription:
      "ConsultifyCare is a healthtech startup I contribute to as a Front End Developer. Due to an active NDA, I cannot disclose internal platform details or proprietary system workflows. My involvement focuses on building structured, responsive interfaces, improving user experience, and supporting scalable frontend architecture. The work emphasizes clean design, performance, and reliability without revealing confidential mechanics.",
    keyFeatures: [
      "User focused responsive UI development",
      "Design consistency and clean layouts",
      "High level backend integration",
      "Usability and accessibility improvements",
      "Scalable front end structure",
    ],
  },
  {
    title: "BAYHOOD Preparatory School Receipt Generator App",
    role: "Developer",
    stack: ["Next.js", "Tailwind", "Supabase"],
    shortDescription:
      "A modern receipt generation and management tool built for BAYHOOD Preparatory School.",
    detailedDescription:
      "This system allows the school to create, edit, and manage receipts through a clean, organized workflow. It includes a searchable dashboard, secure database storage, and AI assisted autofill to streamline administrative processes.",
    keyFeatures: [
      "Create and edit receipts",
      "Supabase storage and retrieval",
      "AI powered autofill",
      "Clean, responsive UI",
    ],
  },
  {
    title: "Omoluwabi Golfers Nomination App",
    role: "Developer",
    stack: ["Next.js", "Supabase"],
    shortDescription:
      "A secure nomination system for the Omoluwabi Golfers Electoral Committee.",
    detailedDescription:
      "The platform manages nominations through a restricted admin login system and a verified list of eligible members. It ensures accurate record keeping and prevents unauthorized submissions.",
    keyFeatures: [
      "Admin login",
      "Verified members list",
      "Nomination submission form",
      "Secure data storage",
    ],
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary text-center mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A selection of work spanning frontend engineering, system design, and
            full stack integration.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
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
