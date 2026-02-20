import { motion } from "framer-motion";
import { MapPin, Gamepad2, Globe, Code, Smartphone, Database, ShieldCheck, Cpu } from "lucide-react";

const FOCUS_AREAS = [
  { icon: Gamepad2, label: "Game Development" },
  { icon: Globe, label: "Web Development" },
  { icon: Code, label: "Software Engineering" },
];

const ALSO_LEARNED = [
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Database, label: "Database Management" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Cpu, label: "Embedded Systems" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay },
});

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
            About Me
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Story Behind the Code
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left — story text (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <motion.p
              {...fadeUp(0.1)}
              className="text-lg leading-relaxed text-gray-300"
            >
              I&apos;m passionate about developing software that makes a real
              difference. Having experienced firsthand how apps and games can
              provide solace during difficult times, I&apos;m dedicated to
              crafting digital experiences that help and uplift users.
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="leading-relaxed text-gray-400"
            >
              Beyond my core focus areas, I&apos;ve explored mobile app
              development, database management, cybersecurity, and embedded
              systems — giving me a broad perspective that helps me approach
              problems from multiple angles and collaborate across disciplines.
            </motion.p>

            <motion.div
              {...fadeUp(0.25)}
              className="flex items-center gap-2 pt-2 text-sm text-gray-500"
            >
              <MapPin size={16} className="text-cyan-400/60" />
              <span>Based in Hong Kong</span>
            </motion.div>
          </div>

          {/* Right — skill cards (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Primary focus */}
            <motion.div {...fadeUp(0.15)}>
              <h3 className="mb-3 text-xs font-medium tracking-widest text-gray-500 uppercase">
                Primary Focus
              </h3>
              <div className="space-y-2">
                {FOCUS_AREAS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-gray-700/40 bg-gray-800/30 px-4 py-3 transition-colors hover:border-cyan-500/30 hover:bg-gray-800/50"
                  >
                    <Icon size={18} className="text-cyan-400" />
                    <span className="text-sm font-medium text-gray-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Also explored */}
            <motion.div {...fadeUp(0.25)}>
              <h3 className="mb-3 text-xs font-medium tracking-widest text-gray-500 uppercase">
                Also Explored
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {ALSO_LEARNED.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-gray-700/30 bg-gray-800/20 px-3 py-2.5 transition-colors hover:border-gray-600/50"
                  >
                    <Icon size={15} className="text-gray-500" />
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
