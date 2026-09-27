import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { contact, education, experience, skills, awards, leadership } from '../data/profile';
import './Home.css';

const focusAreas = [
  {
    icon: '🤖',
    title: 'Agentic AI',
    desc: 'LangGraph agents that plan multi-step work, keep persistent memory, and reason over retrieved context.',
  },
  {
    icon: '🔍',
    title: 'Retrieval-Augmented Generation',
    desc: 'End-to-end RAG: ingestion, chunking, embeddings, vector search (Milvus, pgvector), and grounded answers.',
  },
  {
    icon: '🧠',
    title: 'LLM Fine-Tuning',
    desc: 'Supervised and multi-task instruction fine-tuning of models like Gemma-3 and DistilBERT.',
  },
  {
    icon: '🛡️',
    title: 'Explainable ML',
    desc: 'Calibrated, interpretable models with SHAP explanations for high-stakes decisions such as fraud detection.',
  },
  {
    icon: '🔁',
    title: 'Full ML Lifecycle',
    desc: 'Data preparation, feature engineering, training, tuning, evaluation, and retraining.',
  },
  {
    icon: '🚀',
    title: 'Full-Stack AI Systems',
    desc: 'FastAPI backends, React/TypeScript dashboards, Docker, and Azure event-driven processing.',
  },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.stagger');
    elements?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 + i * 120);
    });
  }, []);

  return (
    <div className="page home-page">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-text">
            <p className="stagger hero-eyebrow">
              <span className="dot"></span> Centific Hackathon Winner · 1st of 15,000+
            </p>
            <h1 className="stagger hero-name">
              Puchalapalli<br />
              <span className="name-accent">Harika</span>
            </h1>
            <p className="stagger hero-role">AI Engineer</p>
            <p className="stagger hero-bio">
              AI Engineer experienced in the <strong>full ML lifecycle</strong> (data preparation,
              training, tuning, retraining) and in deploying <strong>LLM/RAG agents</strong>;
              full-stack with Python, PyTorch, FastAPI, and React/TypeScript.
            </p>
            <div className="stagger hero-actions">
              <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
              <a href={contact.resume} download className="btn-ghost">Download Resume</a>
              <a href={`mailto:${contact.email}`} className="btn-ghost">Get in Touch</a>
            </div>
          </div>

          <div className="stagger hero-avatar">
            <div className="avatar-ring">
              <div className="avatar-placeholder">
                <img src={require('./profile.jpg')} alt="Puchalapalli Harika" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="ring-decoration"></div>
            </div>
            <div className="avatar-tag">
              <span className="tag-dot"></span>
              AI Engineering Intern @ Centific
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section">
        <div className="section-inner">
          <div className="section-label">
            <span>01</span> About Me
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Turning data into <em>intelligence</em></h2>
              <p>
                I'm a B.Tech Artificial Intelligence student at <strong>Mahindra University</strong> who
                builds AI systems end to end: from preparing data and training models to deploying
                LLM and RAG agents behind production APIs and React dashboards.
              </p>
              <p>
                At <strong>Centific</strong>, I built a LangGraph Market Research Agent with Cosmos DB
                memory and Azure Event Hub processing, an internship I earned by winning Centific's
                hackathon. At <strong>Vassar Labs</strong>, I shipped an end-to-end RAG QA system on
                Milvus, containerized with Docker.
              </p>
              <p>
                Outside of tech, I serve as Finance Member of the <strong>Sakhi Club</strong> (Women
                Empowerment Club) at Mahindra University.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">9.30</div>
                <div className="stat-label">CGPA / 10</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">2</div>
                <div className="stat-label">AI Internships</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">5</div>
                <div className="stat-label">AI Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">#1</div>
                <div className="stat-label">of 15,000+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section">
        <div className="section-inner">
          <div className="section-label">
            <span>02</span> Experience
          </div>
          <h2 className="section-title">Where I've worked</h2>
          <div className="timeline">
            {experience.map((job) => (
              <div className="timeline-card" key={job.company}>
                <div className="timeline-head">
                  <div>
                    <h3 className="timeline-title">{job.role}</h3>
                    <div className="timeline-org">{job.company}</div>
                  </div>
                  <div className="timeline-period">{job.period}</div>
                </div>
                {job.note && <p className="timeline-note">{job.note}</p>}
                <ul className="timeline-points">
                  {job.points.map((p) => (
                    <li key={p}><span className="point-arrow">→</span>{p}</li>
                  ))}
                </ul>
                <div className="skill-tags">
                  {job.tools.map((t) => <span className="skill-tag small" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section">
        <div className="section-inner">
          <div className="section-label">
            <span>03</span> Education
          </div>
          <h2 className="section-title">Academic background</h2>
          <div className="details-card">
            {education.map((e) => (
              <div className="edu-row" key={e.school}>
                <div>
                  <div className="edu-school">{e.school}</div>
                  <div className="edu-degree">{e.degree} · <span className="edu-score">{e.score}</span></div>
                </div>
                <div className="edu-period">{e.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section research-section">
        <div className="section-inner">
          <div className="section-label">
            <span>04</span> Focus Areas
          </div>
          <h2 className="section-title">What I build</h2>
          <div className="research-grid">
            {focusAreas.map((item) => (
              <div className="research-card" key={item.title}>
                <div className="research-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section">
        <div className="section-inner">
          <div className="section-label">
            <span>05</span> Skills
          </div>
          <h2 className="section-title">Technical toolkit</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <div className="skill-category">{group.category}</div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & LEADERSHIP */}
      <section className="section awards-section">
        <div className="section-inner">
          <div className="section-label">
            <span>06</span> Awards & Leadership
          </div>
          <h2 className="section-title">Recognition</h2>
          <div className="awards-grid">
            {awards.map((a) => (
              <div className="research-card" key={a.title}>
                <div className="research-icon">🏆</div>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
                <div className="card-period">{a.period}</div>
              </div>
            ))}
            {leadership.map((l) => (
              <div className="research-card" key={l.title}>
                <div className="research-icon">🤝</div>
                <h3>{l.title}</h3>
                <p>{l.org}. {l.detail}.</p>
                <div className="card-period">{l.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section details-section" id="contact">
        <div className="section-inner">
          <div className="section-label">
            <span>07</span> Contact
          </div>
          <h2 className="section-title">Get in touch</h2>
          <div className="details-card">
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <a className="detail-value detail-link" href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="detail-row">
              <span className="detail-label">LinkedIn</span>
              <a className="detail-value detail-link" href={contact.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/harika-p-622557288
              </a>
            </div>
            <div className="detail-row">
              <span className="detail-label">GitHub</span>
              <a className="detail-value detail-link" href={contact.github} target="_blank" rel="noreferrer">
                github.com/Harika-tech412
              </a>
            </div>
            <div className="detail-row">
              <span className="detail-label">Resume</span>
              <a className="detail-value detail-link" href={contact.resume} download>Download PDF</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-name">Puchalapalli Harika</p>
          <p className="footer-sub">AI Engineer · Mahindra University · 2027</p>
          <div className="footer-links">
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Puchalapalli Harika. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}
