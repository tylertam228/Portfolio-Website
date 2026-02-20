import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Instagram, Coffee } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/tylertam228", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tyler-tam-s228", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/tiger___228", label: "Instagram" },
  { icon: Coffee, href: "https://buymeacoffee.com/tiger228", label: "Buy Me a Coffee" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay },
});

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div {...fadeUp()} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-400 uppercase shadow-lg shadow-cyan-500/5">
            <Send size={16} className="opacity-70" />
            Contact
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          className="mt-4 text-gray-400"
        >
          Got a project in mind or just want to say hi?
          Feel free to reach out — I&apos;m always open to new opportunities and collaborations.
        </motion.p>

        <motion.a
          {...fadeUp(0.2)}
          href="mailto:tiger228.tyh@outlook.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
        >
          <Mail size={18} />
          tiger228.tyh@outlook.com
        </motion.a>

        <motion.div
          {...fadeUp(0.25)}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg border border-gray-700/50 p-2.5 text-gray-400 transition-all hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
