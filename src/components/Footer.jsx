import { Github, Twitter, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/tiger228", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@tyhstudio.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Tiger228. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg border border-border p-2 text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
