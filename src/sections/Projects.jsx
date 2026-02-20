import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  WifiOff,
  Rocket,
} from "lucide-react";
import imgDragonBid from "@/assets/DragonBid.jpg";
import imgPulse from "@/assets/PulseDetectorArduino.jpeg";
import imgWordle from "@/assets/Wordle.webp";
import imgGreninja from "@/assets/greninja.jpg";

const PROJECTS = [
  {
    title: "DragonBid",
    subtitle: "Web Auction System for Gaming Group",
    tech: ["Flask", "Discord OAuth2", "Supabase", "Vercel"],
    description:
      "Engineered a full-stack auction automation platform hosted on Vercel for the Dragon Raja community, integrating Discord OAuth2 for authenticating team members and implementing a logic-driven queuing system that autonomously executes purchases to optimize resource distribution and minimize player costs.",
    image: imgDragonBid,
    github: null,
    live: null,
    offline: "Offline since 2025/10",
  },
  {
    title: "Pulse Detector",
    subtitle: "Heart Rate Measurement System",
    tech: ["Arduino IDE", "Arduino UNO", "Pulse Sensor"],
    description:
      "Developed a heart rate measurement system using a Pulse Sensor with Arduino UNO and breadboard, programmed in Arduino IDE to process and display real-time heart rate data.",
    image: imgPulse,
    github: "https://github.com/tylertam228/Pulse-Detector",
    live: null,
    offline: null,
  },
  {
    title: "Wordle Game",
    subtitle: "Terminal Word Guessing Game",
    tech: ["C"],
    description:
      "A Wordle game built with C programming, providing feedback on each guess using colored indicators: green for correct letters in the correct position, yellow for correct letters in the wrong position, and red for letters not in the word.",
    image: imgWordle,
    github: "https://github.com/tylertam228/Wordle-Game-in-C",
    live: null,
    offline: null,
  },
  {
    title: "Greninja Fans Page",
    subtitle: "Interactive Fan Website",
    tech: ["JavaScript", "TypeScript", "Bootstrap"],
    description:
      "A fan page featuring a duration timer built with TypeScript to record how long users stay on the page, along with a Navbar logo hover animation crafted with CSS.",
    image: imgGreninja,
    github:
      "https://github.com/tylertam228/Greninja-Fans-Page-CSCI-2720",
    live: null,
    offline: null,
  },
];

const CARD_COUNT = PROJECTS.length;
const ANGLE_STEP = 360 / CARD_COUNT;
const RADIUS = 340;

function getCardStyle(index, active) {
  const offset = index - active;
  const angle = offset * ANGLE_STEP;
  const rad = (angle * Math.PI) / 180;

  const x = Math.sin(rad) * RADIUS;
  const z = Math.cos(rad) * RADIUS - RADIUS;

  const isCenter = offset === 0;
  const scale = isCenter ? 1 : 0.75;
  const opacity = isCenter ? 1 : 0.35;
  const blur = isCenter ? 0 : 3;

  return {
    x,
    z,
    rotateY: angle,
    scale,
    opacity,
    filter: `blur(${blur}px)`,
  };
}

function ProjectCard({ project, isActive }) {
  return (
    <div
      className={`flex h-[480px] w-[320px] flex-col rounded-2xl border bg-gray-900/70 backdrop-blur-sm overflow-hidden transition-colors duration-500 ${
        isActive
          ? "border-gray-600/60 shadow-2xl shadow-black/40"
          : "border-gray-800/40"
      }`}
    >
      {/* Project image */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-0.5 text-xs text-gray-500">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-5">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="mt-4 flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-700/50 px-3 py-2 text-xs font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 px-3 py-2 text-xs font-medium text-cyan-400 transition-all hover:bg-cyan-500/25"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.offline && (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-700/40 bg-gray-800/50 px-3 py-2 text-xs text-gray-500">
              <WifiOff size={14} />
              {project.offline}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((v) => (v - 1 + CARD_COUNT) % CARD_COUNT);
  const next = () => setActive((v) => (v + 1) % CARD_COUNT);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-400 uppercase shadow-lg shadow-cyan-500/5">
            <Rocket size={16} className="opacity-70" />
            Projects
          </span>
        </motion.div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-4 text-center text-xl font-medium tracking-widest text-gray-500 uppercase">
              Here are some of the projects I have worked on
            </p>
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="relative mx-auto" style={{ perspective: "1200px" }}>
          <div className="relative mx-auto flex items-center justify-center h-[520px]">
            {/* Cards */}
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                width: 320,
                height: 480,
              }}
            >
              <AnimatePresence initial={false}>
                {PROJECTS.map((project, i) => {
                  const style = getCardStyle(i, active);
                  return (
                    <motion.div
                      key={project.title}
                      animate={{
                        x: style.x,
                        z: style.z,
                        rotateY: style.rotateY,
                        scale: style.scale,
                        opacity: style.opacity,
                        filter: style.filter,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 28,
                      }}
                      className="absolute inset-0"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <ProjectCard
                        project={project}
                        isActive={i === active}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/50 text-gray-400 transition-all hover:border-cyan-500/40 hover:text-white hover:bg-gray-800"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-cyan-400"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/50 text-gray-400 transition-all hover:border-cyan-500/40 hover:text-white hover:bg-gray-800"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
