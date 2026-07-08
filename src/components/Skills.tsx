import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGo,
  SiPostgresql,
  SiGithub,
  SiPython,
  SiR,
  SiGoogleanalytics,
} from "react-icons/si";
import { FaJava, FaBullhorn, FaChartLine, FaPenNib, FaHashtag } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { reveal, revealGroup, revealViewport } from "@/lib/motion";

// Tech stack with actual logos
const skillGroups = [
  {
    category: "Frontend",
    description: "My primary domain",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "#E34C26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    ],
    color: "from-blue-500 to-blue-600",
    dotColor: "bg-blue-400",
  },
  {
    category: "Backend",
    description: "Expanding stack",
    skills: [
      { name: "Go", Icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    ],
    color: "from-violet-500 to-violet-600",
    dotColor: "bg-violet-400",
  },
  {
    category: "Programming",
    description: "Academic & professional",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", Icon: FaJava, color: "#007396" },
      { name: "R", Icon: SiR, color: "#276DC3" },
    ],
    color: "from-emerald-500 to-emerald-600",
    dotColor: "bg-emerald-400",
  },
  {
    category: "Tools & Platforms",
    description: "Daily workflow",
    skills: [
      { name: "Git & GitHub", Icon: SiGithub, color: "#181717" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
    ],
    color: "from-amber-500 to-amber-600",
    dotColor: "bg-amber-400",
  },
  {
    category: "Marketing & Strategy",
    description: "Growth & brand",
    skills: [
      { name: "Digital Marketing", Icon: SiGoogleanalytics, color: "#E37400" },
      { name: "Content Strategy", Icon: FaPenNib, color: "#F43F5E" },
      { name: "Brand Positioning", Icon: FaBullhorn, color: "#FB7185" },
      { name: "Growth Strategy", Icon: FaChartLine, color: "#10B981" },
      { name: "Social Media", Icon: FaHashtag, color: "#3B82F6" },
    ],
    color: "from-rose-500 to-rose-600",
    dotColor: "bg-rose-400",
  },
];

const currentlyLearning = {
  category: "Currently Learning",
  description: "What's next",
  skills: ["Advanced Go", "SQL Design", "API Architecture", "Production Workflows"],
  dotColor: "bg-cyan-400",
};

const SkillLogo = ({ skill }: { skill: { name: string; Icon: any; color: string } }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative group">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-lg bg-white border border-border shadow-sm hover:border-primary/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-md"
      >
        <skill.Icon size={28} color={skill.color} />
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: -16 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50"
        >
          <div className="bg-foreground text-background px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg">
            {skill.name}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
        </motion.div>
      )}
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <motion.p variants={reveal} className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
            <span className="text-primary/50">03</span> &nbsp;/&nbsp; Toolkit
          </motion.p>
          <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p variants={reveal} className="text-muted-foreground text-lg mb-16 max-w-2xl">
            A comprehensive toolkit for building modern, scalable web applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={reveal}
                className="group relative overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 transition-all duration-300 p-6"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Category header with colored dot */}
                  <div className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full ${group.dotColor} flex-shrink-0 mt-1`} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 mb-0.5">
                        {group.description}
                      </p>
                      <p className="text-lg font-bold text-foreground">{group.category}</p>
                    </div>
                  </div>

                  {/* Skills Grid with logos */}
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    {group.skills.map((skill) => (
                      <SkillLogo key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Currently Learning: concepts, not products, so words instead of logos */}
            <motion.div
              variants={reveal}
              className="group relative overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 transition-all duration-300 p-6"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full ${currentlyLearning.dotColor} flex-shrink-0 mt-1`} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 mb-0.5">
                      {currentlyLearning.description}
                    </p>
                    <p className="text-lg font-bold text-foreground">{currentlyLearning.category}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentlyLearning.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
