import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a Front End Developer and Marketing Strategist currently
              working at Stackle Vest, where I combine frontend engineering with
              growth-focused digital strategy. My core focus is creating smooth,
              responsive interfaces that combine strong visual structure with
              real world usability. I work extensively with React, Next.js,
              TypeScript, and Tailwind CSS to transform ideas into reliable,
              modern web experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Beyond the frontend, I am intentionally expanding into backend
              development to become a well rounded engineer. I am learning Go
              and the Fiber framework, along with SQL, to understand how
              scalable systems, APIs, and data structures operate behind the
              scenes. I also continue to sharpen my skills in Python, Java, and
              R as part of my academic and professional growth in Computer
              Science.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I take every project seriously from school systems to
              organizational tools because I believe good software should make
              people's lives easier. My approach is simple: write clean code,
              pay attention to detail, and build products that not only work,
              but work beautifully, efficiently, and consistently.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-medium text-primary"
            >
              As a final year Computer Science student at Nile University, I'm
              committed to continuous learning, disciplined improvement, and
              building solutions that solve real problems at scale. My long term
              goal is to become a highly skilled engineer capable of delivering
              full, production ready systems that people trust and enjoy using.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
