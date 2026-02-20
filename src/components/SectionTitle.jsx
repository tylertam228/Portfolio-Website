import { motion } from "framer-motion";

export default function SectionTitle({ tag, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wider text-text-muted uppercase">
          {tag}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          {description}
        </p>
      )}
    </motion.div>
  );
}
