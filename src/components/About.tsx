import { motion } from "framer-motion";
import { reveal, revealGroup, revealViewport } from "@/lib/motion";

const stats = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Built", value: "5+" },
  { label: "CS Degree", value: "Grad 2027" },
  { label: "Current Role", value: "Stacklevest" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <motion.p
                variants={reveal}
                className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4"
              >
                <span className="text-primary/50">01</span> &nbsp;/&nbsp; About Me
              </motion.p>
              <motion.h2
                variants={reveal}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Building at the intersection of{" "}
                <span className="text-gradient">code & strategy</span>
              </motion.h2>
            </div>

            <motion.div
              variants={reveal}
              className="space-y-5 text-base md:text-lg text-foreground/70 leading-relaxed"
            >
              <p>
                I'm a Front End Developer and Marketing Strategist at{" "}
                <span className="text-foreground font-semibold">Stacklevest</span>,
                combining clean engineering with growth-focused digital strategy. My core
                focus is building smooth, responsive interfaces with React, Next.js,
                TypeScript, and Tailwind CSS.
              </p>
              <p>
                Beyond the frontend, I'm expanding into backend development,
                learning Go and Fiber to understand scalable APIs and data
                systems, while studying Computer Science at Nile University
                (graduating 2027).
              </p>
              <p className="text-primary font-medium">
                I write clean code, pay attention to detail, and build products that
                work beautifully, efficiently, and consistently.
              </p>
            </motion.div>
          </div>

          {/* Right: Stats bento */}
          <div className="grid grid-cols-2 gap-6 min-w-0">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={reveal}
                className="group relative overflow-hidden min-w-0"
              >
                {/* Minimalist card with just number and label */}
                <div className="space-y-3">
                  {/* Gradient underline */}
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />

                  {/* Number - responsive sizing for long text like "Stacklevest" */}
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground break-words">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
