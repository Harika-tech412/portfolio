import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal, { spotlightHandlers } from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import {
  GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon, ArrowRightIcon, TrophyIcon, CapIcon, UsersIcon, CopyIcon, CheckIcon,
} from '../components/Icons';
import { contact, proof, experience, projects, skills, education, awards, leadership } from '../data/profile';
import portrait from '../assets/portrait.jpg';
import './Home.css';

function Hero() {
  return (
    <section className="hero page-top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <Reveal>
            <Link to="/projects/medical-scribe" className="pill">
              <TrophyIcon />
              <span>Centific Hackathon Winner · <strong>1st of 15,000+</strong></span>
              <ArrowRightIcon className="pill__arrow" />
            </Link>
          </Reveal>

          <Reveal as="h1" className="hero__title" delay={80}>
            Puchalapalli Harika
            <span className="hero__role serif-accent">AI Engineer</span>
          </Reveal>

          <Reveal as="p" className="hero__summary" delay={160}>
            AI Engineer experienced in the full ML lifecycle (data preparation, training, tuning,
            retraining) and in deploying LLM/RAG agents; full-stack with Python, PyTorch, FastAPI,
            and React/TypeScript.
          </Reveal>

          <Reveal className="hero__actions" delay={240}>
            <Link to="/#projects" className="btn btn-primary">
              View my work <ArrowRightIcon />
            </Link>
            <a href={contact.resume} download className="btn btn-secondary">
              <DownloadIcon /> Download Resume
            </a>
            <div className="hero__socials">
              <a className="icon-btn" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a className="icon-btn" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a className="icon-btn" href={`mailto:${contact.email}`} aria-label="Email"><MailIcon /></a>
            </div>
          </Reveal>

          <Reveal as="p" className="hero__meta" delay={320}>
            <CapIcon /> B.Tech in Artificial Intelligence, Mahindra University · Hyderabad, India
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={200}>
          <div className="portrait">
            <img src={portrait} alt="Puchalapalli Harika at Mahindra University" width="480" height="600" />
            <div className="portrait__badge portrait__badge--top">
              <span className="dot" /> AI Engineering Intern · Centific
            </div>
            <div className="portrait__badge portrait__badge--bottom">
              <span className="portrait__num">9.30</span>
              <span className="portrait__lbl">CGPA / 10<br />Merit Scholar</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="proof" delay={120}>
          {proof.map((p) => (
            <div className="proof__item" key={p.label}>
              <div className="proof__value">{p.value}</div>
              <div className="proof__label">{p.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lead }) {
  return (
    <Reveal className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          eyebrow="Experience"
          title={<>Shipping AI in <em>production</em></>}
          lead="Two AI engineering internships building agents, retrieval systems, and the cloud infrastructure around them."
        />
        <div className="xp">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="xp__item card spotlight" {...spotlightHandlers()}>
                <div className="xp__period">{job.period}</div>
                <div className="xp__body">
                  <div className="xp__head">
                    <span className="xp__logo" style={{ background: job.color }}>{job.company[0]}</span>
                    <div>
                      <h3 className="xp__role">{job.role}</h3>
                      <div className="xp__company">{job.company}</div>
                    </div>
                    {job.badge && <span className="badge badge--gold"><TrophyIcon /> {job.badge}</span>}
                  </div>
                  <ul className="bullets">
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <div className="chips">
                    {job.tools.map((t) => <span className="chip" key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title={<>Projects with <em>measurable</em> results</>}
          lead="Each one goes from raw data to a working system. Open a card for the full case study: the problem, the architecture, and the decisions behind it."
        />
        <div className="projects">
          <Reveal className="projects__featured">
            <ProjectCard project={featured} featured />
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="projects__more">
          <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <GitHubIcon /> More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          eyebrow="Toolkit"
          title={<>The <em>stack</em> I build with</>}
          lead="From data preprocessing and model training to agents, APIs, and the dashboards people actually use."
        />
        <div className="skills">
          {skills.map((g, i) => (
            <Reveal key={g.category} className={`skills__card card spotlight skills__card--${i}`} delay={i * 60} {...spotlightHandlers()}>
              <div className="skills__top">
                <span className="skills__idx">0{i + 1}</span>
                <h3>{g.category}</h3>
              </div>
              <div className="chips">
                {g.items.map((s) => <span className="chip chip--lg" key={s}>{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead eyebrow="Background" title={<>Education & <em>recognition</em></>} />
        <div className="bg-grid">
          <Reveal className="card bg-card">
            <h3 className="bg-card__title"><CapIcon /> Education</h3>
            <ol className="edu">
              {education.map((e) => (
                <li key={e.school} className="edu__item">
                  <div className="edu__row">
                    <span className="edu__school">{e.school}</span>
                    <span className="edu__score">{e.score}</span>
                  </div>
                  <div className="edu__row edu__row--sub">
                    <span>{e.degree}</span>
                    <span className="edu__period">{e.period}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="bg-stack">
            {awards.map((a, i) => (
              <Reveal key={a.title} className="card bg-card award" delay={80 + i * 80}>
                <div className="award__icon"><TrophyIcon /></div>
                <div>
                  <div className="award__head">
                    <h3>{a.title}</h3>
                    <span className="award__period">{a.period}</span>
                  </div>
                  <p>{a.detail}</p>
                </div>
              </Reveal>
            ))}
            {leadership.map((l) => (
              <Reveal key={l.title} className="card bg-card award" delay={240}>
                <div className="award__icon award__icon--alt"><UsersIcon /></div>
                <div>
                  <div className="award__head">
                    <h3>{l.title}</h3>
                    <span className="award__period">{l.period}</span>
                  </div>
                  <p><span className="award__org">{l.org}.</span> {l.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact card">
          <div className="contact__glow" aria-hidden="true" />
          <div className="eyebrow">Contact</div>
          <h2 className="h2 contact__title">Let's build something <em>intelligent</em> together.</h2>
          <p className="lead">
            Have a role, a project, or an idea in mind? I'd love to hear about it. Email is the
            fastest way to reach me.
          </p>
          <div className="contact__email">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <button onClick={copy} className="contact__copy" aria-label="Copy email address">
              {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy</>}
            </button>
          </div>
          <div className="contact__actions">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}><MailIcon /> Email me</a>
            <a className="btn btn-secondary" href={contact.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a className="btn btn-secondary" href={contact.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
            <a className="btn btn-secondary" href={contact.resume} download><DownloadIcon /> Resume</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Background />
      <Contact />
    </>
  );
}
