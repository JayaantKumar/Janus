import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
    >
      <h1 className="text-white text-3xl tracking-wide">JANUS</h1>
    </motion.div>
  );
}