import type { Variants } from "framer-motion";

/**
 * Shared scroll-reveal motion.
 *
 * Deliberately restrained: a short rise + a brief blur, on a fast, natural
 * easing curve. The goal is motion you *feel* rather than watch, the opposite
 * of the heavy `y: 30` fade-up-on-scroll that reads as a template default.
 *
 * Usage on a container:
 *   <motion.div variants={revealGroup} initial="hidden"
 *     whileInView="show" viewport={{ once: true, margin: "-80px" }}>
 *     <motion.div variants={reveal}>…</motion.div>
 *   </motion.div>
 *
 * Or standalone on a single element (no stagger needed):
 *   <motion.div variants={reveal} initial="hidden"
 *     whileInView="show" viewport={{ once: true, margin: "-80px" }} />
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

export const revealGroup: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.02 },
  },
};

/** Shared viewport config so every section triggers consistently. */
export const revealViewport = { once: true, margin: "-80px" } as const;
