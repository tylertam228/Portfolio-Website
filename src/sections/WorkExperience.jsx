import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import decatronLogo from "@/assets/Decatron.png";

const EXPERIENCES = [
  {
    company: "Decatron Innovation Limited",
    role: "Engineer — Decatron Internship Program",
    period: "Jun 2025 – Aug 2025",
    logo: decatronLogo,
    bullets: [
      "Prepared a course for 20+ academics on building private RAG systems using Ollama and Deepseek-R1. Successfully prototyped and demonstrated a hardware-integrated AI Voice Assistant on Unihiker M10 using Azure Speech Services for Text-to-Speech and Speech-to-Text functionalities, resulting in successful independent deployments by all participants.",
      "Leveraged TypeScript for block UI definitions and Python for backend logic to design and implement a series of third-party extensions in MindPlus for 20+ academics who don't have coding experience, enabling visual programming with MediaPipe and Tesseract.",
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay },
});

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.15)}
      className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-6"
    >
      {/* Left column */}
      <div className={`flex ${isLeft ? "justify-end" : "justify-end"}`}>
        {isLeft ? (
          <ContentCard exp={exp} align="right" />
        ) : (
          <PeriodLabel period={exp.period} align="right" />
        )}
      </div>

      {/* Center — logo node */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-700/60 bg-gray-900 shadow-lg shadow-cyan-500/5 sm:h-20 sm:w-20">
          <img
            src={exp.logo}
            alt={exp.company}
            className="h-11 w-11 rounded-lg object-contain sm:h-14 sm:w-14"
          />
        </div>
      </div>

      {/* Right column */}
      <div className={`flex ${isLeft ? "justify-start" : "justify-start"}`}>
        {isLeft ? (
          <PeriodLabel period={exp.period} align="left" />
        ) : (
          <ContentCard exp={exp} align="left" />
        )}
      </div>
    </motion.div>
  );
}

function ContentCard({ exp, align }) {
  return (
    <div
      className={`w-full max-w-md rounded-xl border border-gray-700/40 bg-gray-900/50 p-5 backdrop-blur-sm transition-colors hover:border-gray-600/50 sm:p-6 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <h3 className="text-base font-bold text-white sm:text-lg">
        {exp.company}
      </h3>
      <p className="mt-0.5 text-sm text-cyan-400/80">{exp.role}</p>

      <ul className={`mt-4 space-y-3 ${align === "right" ? "text-right" : "text-left"}`}>
        {exp.bullets.map((bullet, j) => (
          <li
            key={j}
            className={`relative text-sm leading-relaxed text-gray-400 ${
              align === "right"
                ? "pr-4 before:absolute before:right-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-500/50"
                : "pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-500/50"
            }`}
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PeriodLabel({ period, align }) {
  return (
    <div
      className={`flex h-16 items-center sm:h-20 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className="inline-flex items-center rounded-full border border-gray-700/40 bg-gray-800/50 px-4 py-1.5 text-xs font-medium text-gray-400">
        {period}
      </span>
    </div>
  );
}

function EndNode({ index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      {...fadeUp(0.3)}
      className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-6"
    >
      {/* Left column */}
      <div className="flex justify-end">
        {isLeft ? (
          <div className={`flex h-16 items-center sm:h-20 justify-end`}>
            <p className="text-sm text-gray-600 italic">
              More experiences on the way...
            </p>
          </div>
        ) : null}
      </div>

      {/* Center — ? node */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-gray-700/50 bg-gray-900/50 sm:h-20 sm:w-20">
          <span className="text-2xl text-gray-600">?</span>
        </div>
      </div>

      {/* Right column */}
      <div className="flex justify-start">
        {!isLeft ? (
          <div className={`flex h-16 items-center sm:h-20 justify-start`}>
            <p className="text-sm text-gray-600 italic">
              More experiences on the way...
            </p>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-400 uppercase shadow-lg shadow-cyan-500/5">
            <Briefcase size={16} className="opacity-70" />
            Work Experience
          </span>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Straight vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-linear-to-b from-cyan-500/40 via-gray-700/30 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} />
            ))}
            <EndNode index={EXPERIENCES.length} />
          </div>
        </div>
      </div>
    </section>
  );
};
