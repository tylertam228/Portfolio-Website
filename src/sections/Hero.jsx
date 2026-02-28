  import { useState, useEffect, useRef, useCallback } from "react";
  import { motion } from "framer-motion";
  import {
    Mail,
    Download,
    Github,
    Linkedin,
    Instagram,
    Coffee,
    MessageCircle,
  } from "lucide-react";
  import tigerGif from "@/assets/Tiger_Animation.gif";

  const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

  const SOCIAL_LINKS = [
    {
      label: "GitHub",
      href: "https://github.com/tylertam228",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/tyler-tam-s228",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/tiger___228",
      icon: Instagram,
    },
    {
      label: "Buy Me a Coffee",
      href: "https://buymeacoffee.com/tiger228",
      icon: Coffee,
    },
  ];

  const SKILLS = [
    { name: "React", icon: `${DEVICON}/react/react-original.svg` },
    { name: "Unity", icon: `${DEVICON}/unity/unity-original.svg` },
    { name: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
    { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
    { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
    { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
    { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
    { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
    { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
    { name: "Vite", icon: `${DEVICON}/vitejs/vitejs-original.svg` },
    { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
    { name: "Android Studio", icon: `${DEVICON}/androidstudio/androidstudio-original.svg` },
    { name: "C", icon: `${DEVICON}/c/c-original.svg` },
    { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
    { name: "Arduino", icon: `${DEVICON}/arduino/arduino-original.svg` },
    { name: "Godot", icon: `${DEVICON}/godot/godot-original.svg` },
    { name: "Supabase", icon: `${DEVICON}/supabase/supabase-original.svg` },
    { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
    { name: "Boostrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
    { name: "Flask", icon: `${DEVICON}/flask/flask-original.svg` },
    { name: "Django", icon: `${DEVICON}/django/django-original.svg` },
  ];

  const SPEECH_LINES = [
    "Browse at your leisure~",
    "I'm just a pet, won't bite!",
    "Hire my human, he's cool.",
  ];
  const SPEECH_TYPE_SPEED = 70;
  const SPEECH_PAUSE = 3000;
  const SPEECH_DELETE_SPEED = 30;

  function useSpeechTyping(lines) {
    const [text, setText] = useState("");
    const lineIdx = useRef(0);
    const charIdx = useRef(0);
    const deleting = useRef(false);

    useEffect(() => {
      let timer;
      const tick = () => {
        const current = lines[lineIdx.current];

        if (!deleting.current) {
          charIdx.current++;
          setText(current.slice(0, charIdx.current));
          if (charIdx.current === current.length) {
            deleting.current = true;
            timer = setTimeout(tick, SPEECH_PAUSE);
            return;
          }
          timer = setTimeout(tick, SPEECH_TYPE_SPEED);
        } else {
          charIdx.current--;
          setText(current.slice(0, charIdx.current));
          if (charIdx.current === 0) {
            deleting.current = false;
            lineIdx.current = (lineIdx.current + 1) % lines.length;
            timer = setTimeout(tick, 400);
            return;
          }
          timer = setTimeout(tick, SPEECH_DELETE_SPEED);
        }
      };
      timer = setTimeout(tick, 600);
      return () => clearTimeout(timer);
    }, [lines]);

    return text;
  }

  function SpeechBubble() {
    const typed = useSpeechTyping(SPEECH_LINES);

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="absolute -top-1 left-1/2 -translate-x-1/2 sm:-top-1 z-20"
      >
        <div className="relative rounded-xl border border-gray-700/60 bg-gray-900/80 px-4 py-2 backdrop-blur-sm shadow-lg">
          <p className="min-h-[1.5em] min-w-[140px] text-center text-sm text-gray-300 whitespace-nowrap">
            {typed}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
          {/* Tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <div className="h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-gray-700/60" />
            <div className="absolute -top-px left-1/2 -translate-x-1/2 h-0 w-0 border-x-[7px] border-t-[7px] border-x-transparent border-t-gray-900/80" />
          </div>
        </div>
      </motion.div>
    );
  }

  function SkillMarquee() {
    const doubled = [...SKILLS, ...SKILLS];

    return (
      <div className="mt-16 mx-auto w-full max-w-3xl">
        <p className="mb-4 text-center text-xl font-medium tracking-widest text-gray-500 uppercase">
          Tech Stack
        </p>
        <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max gap-4">
          {doubled.map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-700/30 bg-gray-800/25 px-4 py-2 text-sm text-gray-500/70 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:text-gray-200 hover:bg-gray-800/50"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-4 w-4 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                loading="lazy"
              />
              {skill.name}
            </span>
          ))}
        </div>
        </div>
      </div>
    );
  }

  export const Hero = () => {
    return (
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left — text content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase"
            >
              &lt; Hello World /&gt;
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              I&apos;m{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tiger228
              </span>
              <br />
              <span className="text-gray-400 text-3xl sm:text-4xl md:text-5xl font-semibold">
              Tyler Tam
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              Building impactful apps and games to give back
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500"
            >
              <span className="rounded-md border border-gray-700/40 px-2.5 py-1">Game Developer</span>
              <span className="text-gray-600">&middot;</span>
              <span className="rounded-md border border-gray-700/40 px-2.5 py-1">Web Developer</span>
              <span className="text-gray-600">&middot;</span>
              <span className="rounded-md border border-gray-700/40 px-2.5 py-1">Software Engineer</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:tiger228.tyh@outlook.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="https://cv.tyhstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-cyan-500/50 hover:text-white"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-3"
            >
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
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

          {/* Right — GIF animation + speech bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/10 blur-2xl" />
              <SpeechBubble />
              <img
                src={tigerGif}
                alt="Tiger228 animation"
                className="relative h-64 w-64 rounded-2xl object-contain sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              />

              {/* AI Chatbox hint */}
              <a
                href="https://ai.tyhstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 whitespace-nowrap"
              >
                <MessageCircle size={14} />
                Got any questions for my human? Ask me!
              </a>
            </div>
          </motion.div>
        </div>

        {/* Infinite scrolling skills */}
        <SkillMarquee />
      </section>
    );
  };
