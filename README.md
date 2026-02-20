# tiger228.tyhstudio.com

Personal portfolio website for Tiger228.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Skill Icons | Devicon CDN |

## Project Structure

```
src/
├── assets/          # Images, GIFs
├── layout/
│   └── Navbar.jsx   # Fixed nav with auto-typing effect
├── sections/
│   ├── Hero.jsx         # Hero with Tiger GIF, speech bubble, skill marquee
│   ├── About.jsx        # About me + focus areas
│   ├── Projects.jsx     # 3D carousel project showcase
│   ├── WorkExperience.jsx  # Alternating timeline
│   ├── Education.jsx    # CUHK + HKDSE with accordion details
│   ├── Certificate.jsx  # Certificate card grid
│   └── Contact.jsx      # CTA with social links
├── App.jsx
├── main.jsx
└── index.css        # Tailwind config + marquee animation
public/
└── cert/            # Certificate PDFs/images (served as static assets)
```

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/` folder, ready to deploy as a static site.

## Deployment

Hosted on Vultr VPS with Nginx.

## License

Apache-2.0 — see [LICENSE](LICENSE).
