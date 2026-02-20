import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck, Code, Brain, Gamepad2 } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Gemini Certified University Student",
    issuer: "Google",
    date: "Jan 2026 – Jan 2029",
    icon: Brain,
    highlight: true,
    link: "/cert/Gemini Certified Student (University).pdf",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    date: null,
    icon: Code,
    highlight: false,
    link: "https://www.freecodecamp.org/certification/fcc-36ef70e9-fc0a-4ca2-9ec4-ac35b6ab59c3/foundational-c-sharp-with-microsoft",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: null,
    icon: Brain,
    highlight: false,
    link: "/cert/Kaggle - Intro to Machine Learning.pdf",
  },
  {
    title: "Python Course Certificate",
    issuer: "Kaggle",
    date: null,
    icon: Code,
    highlight: false,
    link: "/cert/Kaggle - Python.pdf",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Quantium × Forage",
    date: null,
    icon: Code,
    highlight: false,
    link: "/cert/quantium_forage.pdf",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. × Forage",
    date: null,
    icon: Code,
    highlight: false,
    link: "/cert/JPMorgan Chase & Co._forage.pdf",
  },
  {
    title: "CUHK CTF 2025",
    issuer: "CUHK",
    date: null,
    icon: ShieldCheck,
    highlight: false,
    link: "/cert/CUHK CTF 2025.pdf",
  },
  {
    title: "Cybersecurity CTF 2025",
    issuer: "PolyU × NuttyShell",
    date: null,
    icon: ShieldCheck,
    highlight: false,
    link: "/cert/PolyU x NuttyShell Cybersecurity CTF 2025 Tam Yuk Hei.pdf",
  },
  {
    title: "Preventing Sexual Harassment on Campus",
    issuer: "CUHK",
    date: null,
    icon: Award,
    highlight: false,
    link: "/cert/Online Training Module on Preventing Sexual Harassment on Campus.JPG",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay },
});

export const Certificate = () => {
  return (
    <section id="certificate" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-400 uppercase shadow-lg shadow-cyan-500/5">
            <Award size={16} className="opacity-70" />
            Certificates
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={`${cert.title}-${cert.issuer}`}
                {...fadeUp(0.05 + i * 0.05)}
                className={`group relative rounded-xl border p-5 backdrop-blur-sm transition-all hover:border-gray-600/50 ${
                  cert.highlight
                    ? "border-cyan-500/30 bg-cyan-500/5"
                    : "border-gray-700/40 bg-gray-900/50"
                }`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className={`rounded-lg p-2 ${
                    cert.highlight
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "bg-gray-800/50 text-gray-500"
                  }`}>
                    <Icon size={18} />
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-800 hover:text-cyan-400"
                      aria-label="View certificate"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{cert.issuer}</p>

                {cert.date && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-gray-500">
                    <Calendar size={10} />
                    {cert.date}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
