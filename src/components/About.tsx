import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Briefcase, GraduationCap, Zap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Coding", value: "3+", color: "text-blue-400" },
  { icon: Briefcase, label: "Projects Built", value: "5+", color: "text-violet-400" },
  { icon: GraduationCap, label: "CS Student", value: "Final Year", color: "text-emerald-400" },
  { icon: Zap, label: "Current Role", value: "Stackle Vest", color: "text-amber-400" },
];

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4"
              >
                About Me
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Building at the intersection of{" "}
                <span className="text-gradient">code & strategy</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-5 text-base md:text-lg text-foreground/70 leading-relaxed"
            >
              <p>
                I'm a Front End Developer and Marketing Strategist at{" "}
                <span className="text-foreground font-semibold">Stackle Vest</span>,
                combining clean engineering with growth-focused digital strategy. My core
                focus is building smooth, responsive interfaces with React, Next.js,
                TypeScript, and Tailwind CSS.
              </p>
              <p>
                Beyond the frontend, I'm expanding into backend development — learning
                Go and Fiber to understand scalable APIs and data systems — while
                completing my final year of Computer Science at Nile University.
              </p>
              <p className="text-primary font-medium">
                I write clean code, pay attention to detail, and build products that
                work beautifully, efficiently, and consistently.
              </p>
            </motion.div>
          </div>

          {/* Right: Stats bento */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className={`h-5 w-5 mb-4 ${stat.color}`} />
                  <p className="text-2xl md:text-3xl font-bold mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
