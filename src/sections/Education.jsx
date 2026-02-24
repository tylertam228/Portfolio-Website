import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronDown } from "lucide-react";
import cuhkLogo from "@/assets/CUHK.jpeg";
import hkdseLogo from "@/assets/HKDSE.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay },
});

const CUHK_COURSES = [
  "CSCI 1120 – Intro to Computing Using C++",
  "CSCI 2100 – Data Structures",
  "CSCI 2720 – Building Web Applications",
  "CSCI 3150 – Intro to Operating Systems",
  "CSCI 3170 – Intro to Database Systems",
  "CSCI 3190 – Intro to Discrete Math & Algorithms",
  "CENG 2010 – Digital Logic Design Lab",
  "CENG 2030 – Fundamentals of Embedded Systems",
  "CENG 2400 – Embedded System Design",
  "CENG 3420 – Computer Organization & Design",
  "MATH 1510 – Calculus for Engineers",
  "PHYS 1110 – Engineering Physics: Mechanics & Thermo",
  "ENGG 1110 – Problem Solving by Programming",
  "ENGG 1120 – Linear Algebra for Engineers",
  "ENGG 1130 – Multivariable Calculus for Engineers",
  "ENGG 2020 – Digital Logic and Systems",
  "ENGG 2720 – Complex Variables for Engineers",
  "ENGG 2740 – Differential Equations for Engineers",
  "ENGG 2760 – Probability for Engineers",
  "ENGG 2780 – Statistics for Engineers",
];

const CUHK_IN_PROGRESS = [
  "CSCI 3100 – Software Engineering",
  "CSCI 3250 – Computers and Society",
  "CSCI 3251 – Engineering Practicum",
  "CSCI 3310 – Mobile Computing & Apps Development",
  "CSCI 3320 – Fundamentals of Machine Learning",
  "CSCI 4130 – Intro to Cyber Security",
];

const CUHK_ACTIVITIES = [
  "Member of the 46th Cabinet of Computer Science Society",
  "Awarded with Li Dak Sum Yip Yio Chin Kenneth Li Scholarship 2023/24"
];

const DSE_RESULTS = [
  { subject: "Chinese", level: "4" },
  { subject: "English", level: "3" },
  { subject: "Mathematics (Compulsory)", level: "5*" },
  { subject: "Mathematics (Extended – Algebra and Calculus) - M2", level: "5*" },
  { subject: "Liberal Studies", level: "4" },
  { subject: "Information and Communication Technology (ICT)", level: "5" },
  { subject: "Physics", level: "4" },
];

export const Education = () => {
  const [cuhkOpen, setCuhkOpen] = useState(false);
  const [dseOpen, setDseOpen] = useState(false);

  return (
    <section id="education" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-400 uppercase shadow-lg shadow-cyan-500/5">
            <GraduationCap size={16} className="opacity-70" />
            Education
          </span>
        </motion.div>

        {/* Two boxes — stacked vertically */}
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {/* CUHK */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-xl border border-gray-700/40 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-600/50"
          >
            <div className="mb-4 flex flex-col items-center text-center">
              <img
                src={cuhkLogo}
                alt="CUHK"
                className="mb-3 h-16 w-16 rounded-xl object-contain"
              />
              <h3 className="text-sm font-bold text-white sm:text-base">
                B.Eng. in Computer Engineering (CENGN)
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                The Chinese University of Hong Kong, Hong Kong
              </p>
              <span className="mt-2 text-xs text-gray-500">
                09/2023 – 07/2027 (Expected)
              </span>
            </div>

            <button
              onClick={() => setCuhkOpen((v) => !v)}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-700/40 bg-gray-800/30 px-3 py-2 text-xs font-medium text-cyan-400 transition-all hover:bg-gray-800/50"
            >
              View Details
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${cuhkOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {cuhkOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-4 border-t border-gray-700/30 pt-4">
                    <div>
                      <h4 className="mb-2 text-xs font-medium tracking-widest text-gray-500 uppercase">
                        Completed Courses
                      </h4>
                      <ul className="space-y-1">
                        {CUHK_COURSES.map((c) => (
                          <li key={c} className="text-xs leading-relaxed text-gray-400">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-medium tracking-widest text-gray-500 uppercase">
                        In Progress
                      </h4>
                      <ul className="space-y-1">
                        {CUHK_IN_PROGRESS.map((c) => (
                          <li key={c} className="text-xs leading-relaxed text-cyan-400/70">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-medium tracking-widest text-gray-500 uppercase">
                        Activities
                      </h4>
                      <ul>
                        {CUHK_ACTIVITIES.map((a) => (
                          <li key={a} className="text-xs text-gray-400">
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* DSE */}
          <motion.div
            {...fadeUp(0.2)}
            className="rounded-xl border border-gray-700/40 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-600/50"
          >
            <div className="mb-4 flex flex-col items-center text-center">
              <img
                src={hkdseLogo}
                alt="HKDSE"
                className="mb-3 h-16 w-16 rounded-xl object-contain"
              />
              <h3 className="text-sm font-bold text-white sm:text-base">
                2023 HKDSE Results
              </h3>
              <p className="mt-1 text-xs text-gray-400">Hong Kong</p>
              <span className="mt-2 text-xs text-gray-500">
                Best 5: 25
              </span>
            </div>

            <button
              onClick={() => setDseOpen((v) => !v)}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-700/40 bg-gray-800/30 px-3 py-2 text-xs font-medium text-cyan-400 transition-all hover:bg-gray-800/50"
            >
              View Details
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${dseOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dseOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 border-t border-gray-700/30 pt-4">
                    <div className="overflow-hidden rounded-lg border border-gray-700/40">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-700/40 bg-gray-800/40">
                            <th className="px-3 py-2.5 text-left text-[10px] font-medium tracking-wider text-gray-400 uppercase">
                              Subject
                            </th>
                            <th className="px-3 py-2.5 text-center text-[10px] font-medium tracking-wider text-gray-400 uppercase">
                              Level
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {DSE_RESULTS.map((r, i) => (
                            <tr
                              key={r.subject}
                              className={`border-b border-gray-700/20 transition-colors hover:bg-gray-800/30 ${
                                i === DSE_RESULTS.length - 1 ? "border-b-0" : ""
                              }`}
                            >
                              <td className="px-3 py-2 text-xs text-gray-300">
                                {r.subject}
                              </td>
                              <td className="px-3 py-2 text-center">
                                <span
                                  className={`inline-flex min-w-8 items-center justify-center rounded-md px-2 py-0.5 text-xs font-bold ${
                                    r.level.includes("*")
                                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                                      : Number(r.level) >= 5
                                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                                        : "bg-gray-700/40 text-gray-300"
                                  }`}
                                >
                                  {r.level}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-[10px] leading-relaxed text-gray-600">
                      * Best 5 counting includes M1/M2. 5* counts as 6, 5** counts as 7.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
