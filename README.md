# Puchalapalli Harika — Portfolio

Personal portfolio of **Puchalapalli Harika**, AI Engineer (B.Tech in AI, Mahindra University).
Built with **React** and **React Router**, deployed on **Vercel**.

**Home (`/`):** hero with resume download and headline metrics, Experience (Centific, Vassar Labs), Projects,
Skills, Education & Awards, Contact.
**Case studies (`/projects/:slug`):** one page per project (problem, architecture, engineering highlights,
results, stack) for Aegis, EduAgent, Multilingual NLP, Hybrid Predictive Maintenance, and Medical Scribe Agent.

## Local development

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in build/
```

## Editing content

Almost all content lives in [`src/data/profile.js`](src/data/profile.js): contact links, education, experience,
projects, skills, awards, and leadership. The downloadable resume is [`public/Harika_Resume.pdf`](public/Harika_Resume.pdf).

## Deployment (Vercel)

The repo is connected to Vercel, so every push to `main` deploys to production automatically, and pull
requests get preview URLs.

- Framework preset: **Create React App**
- Build command: `npm run build`
- Output directory: `build`
- [`vercel.json`](vercel.json) rewrites all routes to `/index.html`, so refreshing `/projects` doesn't 404.

Vercel builds with `CI=true`, which makes CRA treat lint warnings as errors. Check locally before pushing:

```bash
# macOS / Linux / Git Bash
CI=true npm run build
# PowerShell
$env:CI="true"; npm run build
```

Manual deploy with the CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Project structure

```
src/
├── assets/       portrait.jpg
├── components/   Navbar, Footer, ProjectCard, Reveal (scroll animations), Icons
├── data/         profile.js (all site content)
├── pages/        Home, ProjectDetail (case studies), NotFound
├── App.js        routes + scroll handling
└── index.css     design tokens and shared styles
public/
├── index.html    meta + Open Graph tags
├── og-image.png  link-preview image
├── favicon.svg
└── Harika_Resume.pdf
vercel.json
```

If the site's domain changes, update the `og:image` URL in `public/index.html` so link previews keep working.
