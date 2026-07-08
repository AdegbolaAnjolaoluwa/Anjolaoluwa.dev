import { motion } from "framer-motion";
import memoji from "@/assets/memoji.png";

export const WavingMemoji = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="w-full h-full flex items-center justify-center"
    >
      <img
        src={memoji}
        alt="Memoji"
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </motion.div>
  );
};
