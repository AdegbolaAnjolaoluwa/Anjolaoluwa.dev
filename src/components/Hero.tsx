import { motion, type Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";
import { InteractiveDots } from "./InteractiveDots";
import DecryptedText from "./DecryptedText";
import { WavingMemoji } from "./WavingMemoji";

const roles = [
  "Front End Developer",
  "Marketing Strategist",
  "CS Student",
  "Video Editor",
  "Shooter",
];

// One orchestrated entrance: the container sets the cadence, each child just
// declares its own rise. Keeps the timing consistent and easy to tune.
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Interactive dot field that tracks the cursor */}
      <div className="absolute inset-0 pointer-events-none">
        <InteractiveDots />
      </div>

      {/* Contained ambient glow: a subtle accent, not a corner wash */}
      <div className="absolute top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      {/* Content: split layout with memoji on right */}
      <div className="relative z-10 container-custom w-full px-6 pt-20 pb-12">
        <div className="flex items-center justify-between gap-12 lg:gap-32">
          {/* Left side: content */}
          <motion.div
            className="flex-1 max-w-3xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Kicker + availability, with mobile memoji riding alongside */}
            <motion.div variants={rise} className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2 2xl:h-2.5 2xl:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 2xl:h-2.5 2xl:w-2.5 bg-green-500" />
                </span>
                <span className="font-mono text-xs md:text-sm 2xl:text-base uppercase tracking-[0.18em] text-muted-foreground">
                  Open to opportunities
                </span>
              </div>

              {/* Mobile/tablet memoji: sits in-flow so it never overlaps the name text */}
              <div className="lg:hidden w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0">
                <WavingMemoji />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={rise}
              className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-[1.02] tracking-tight mb-6"
            >
              Adegbola Anjolaoluwa
              <br />
              <span className="text-gradient">Samuel.</span>
            </motion.h1>

            {/* Roles: inline mono line, decrypts once on load */}
            <motion.div
              variants={rise}
              className="font-mono text-sm md:text-base 2xl:text-lg text-primary mb-6"
            >
              <DecryptedText
                text={roles.join("  /  ")}
                animateOn="view"
                sequential
                revealDirection="start"
                speed={28}
                useOriginalCharsOnly
              />
            </motion.div>

            {/* Value proposition */}
            <motion.p
              variants={rise}
              className="text-lg md:text-xl 2xl:text-2xl text-foreground/70 leading-relaxed max-w-2xl 2xl:max-w-3xl mb-10"
            >
              I build fast, accessible web interfaces with React, Next.js, and
              TypeScript, and position what I ship to actually reach people.
              Currently developing frontends at{" "}
              <span className="text-foreground font-semibold">Stacklevest</span>{" "}
              while finishing my Computer Science degree.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={rise} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 2xl:px-10 h-12 2xl:h-14 text-base 2xl:text-lg font-semibold group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 2xl:h-5 2xl:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 2xl:px-10 h-12 2xl:h-14 text-base 2xl:text-lg font-semibold border-border/60 hover:bg-secondary/50"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
                <Mail className="ml-2 h-4 w-4 2xl:h-5 2xl:w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 2xl:px-10 h-12 2xl:h-14 text-base 2xl:text-lg font-semibold text-muted-foreground hover:text-foreground"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                  <Download className="ml-2 h-4 w-4 2xl:h-5 2xl:w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side: Memoji */}
          <motion.div
            variants={rise}
            className="hidden lg:flex flex-shrink-0 items-center justify-center -mr-32 lg:-mr-48"
          >
            <div className="w-[28rem] h-[36rem] lg:w-[36rem] lg:h-[48rem] 2xl:w-[44rem] 2xl:h-[56rem]">
              <WavingMemoji />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
