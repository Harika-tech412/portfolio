# Puchalapalli Harika — Portfolio

Personal portfolio of **Puchalapalli Harika**, AI Engineer (B.Tech in AI, Mahindra University).
Built with **React** and **React Router**, deployed on **Vercel**.

**Sections:** hero with a resume download, About, Experience (Centific, Vassar Labs), Education, Focus Areas,
Skills, Awards & Leadership, Contact, and a Projects page (Aegis, EduAgent, Multilingual NLP for Indian
Languages, Hybrid Predictive Maintenance, Medical Scribe Agent).

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
├── components/   Navbar
├── data/         profile.js (site content)
├── pages/        Home, Projects (+ CSS, profile photo)
├── App.js        routes
└── index.js
public/
├── index.html
└── Harika_Resume.pdf
vercel.json
```
