import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay }}
      className={`rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-hover hover:bg-card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}
