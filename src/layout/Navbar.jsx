import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/Tiger_code.jpg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Certificate", href: "#certificate" },
  { label: "Contact", href: "#contact" },
];

const TITLES = ["Game Developer", "Web Developer", "Software Engineer"];
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useAutoType(words) {
  const [display, setDisplay] = useState("");
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;
    const tick = () => {
      const current = words[idx.current];

      if (!deleting.current) {
        charIdx.current++;
        setDisplay(current.slice(0, charIdx.current));

        if (charIdx.current === current.length) {
          deleting.current = true;
          timer = setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        timer = setTimeout(tick, TYPE_SPEED);
      } else {
        charIdx.current--;
        setDisplay(current.slice(0, charIdx.current));

        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % words.length;
          timer = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        timer = setTimeout(tick, DELETE_SPEED);
      }
    };

    timer = setTimeout(tick, PAUSE_AFTER_DELETE);
    return () => clearTimeout(timer);
  }, [words]);

  return display;
}

export const Navbar = () => {
  const typed = useAutoType(TITLES);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Left — logo + typing text */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Tiger228 logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500/60 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex items-baseline gap-1.5 text-sm sm:text-base">
            <span className="font-bold text-white tracking-wide">
              Tiger228
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-400">
              I&apos;m a{" "}
              <span className="text-cyan-400 font-semibold">{typed}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>
        </a>

        {/* Right — desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3 py-2 text-sm text-gray-300 transition-colors hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 bg-background/95 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-gray-300 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
