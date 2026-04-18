import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const skills = [
  { category: 'Languages', items: ['Python', 'C', 'Java'] },
  { category: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'GenAI', 'RAG'] },
  { category: 'Libraries', items: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'HuggingFace'] },
  { category: 'Web / Backend', items: ['React', 'HTML', 'CSS', 'Django', 'REST APIs'] },
  { category: 'Tools', items: ['Docker', 'Git', 'Postman', 'Milvus (Vector DB)'] },
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
      {/* Background orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-text">
            <p className="stagger hero-eyebrow">
              <span className="dot"></span> Available for Internships
            </p>
            <h1 className="stagger hero-name">
              Puchalapalli<br />
              <span className="name-accent">Harika</span>
            </h1>
            <p className="stagger hero-role">
              AI Engineer &nbsp;·&nbsp; ML Researcher &nbsp;·&nbsp; Builder
            </p>
            <p className="stagger hero-bio">
              B.Tech AI student at <strong>Mahindra University</strong> (CGPA 9.20) with hands-on
              experience building RAG systems, multilingual NLP models, and scalable AI pipelines.
              Passionate about making intelligent systems that solve real-world problems.
            </p>
            <div className="stagger hero-actions">
              <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
              <a
                href="mailto:harikapuchalapalli@gmail.com"
                className="btn-ghost"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="stagger hero-avatar">
            <div className="avatar-ring">
              <div className="avatar-placeholder">
                <img src={require('./profile.jpg')} alt="Harika" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%'}} />
              </div>
              <div className="ring-decoration"></div>
            </div>
            <div className="avatar-tag">
              <span className="tag-dot"></span>
              AI Intern @ Vassar Labs
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>scroll</span>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="section about-section">
        <div className="section-inner">
          <div className="section-label">
            <span>01</span> About Me
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Turning data into <em>intelligence</em></h2>
              <p>
                I'm an Artificial Intelligence undergraduate passionate about building systems that
                actually understand language, learn from data, and scale to real users. My journey
                spans from fine-tuning large language models to deploying production-grade AI APIs.
              </p>
              <p>
                During my internship at <strong>Vassar Labs</strong>, I built an end-to-end
                RAG-based QA system — handling everything from document ingestion and vector
                embeddings to Dockerized deployment. I love working at the intersection of
                research and engineering.
              </p>
              <p>
                Outside of tech, I serve as Finance Member for the <strong>Sakhi Club</strong>
                &nbsp;(Women Empowerment Club) at Mahindra University, directing budgeting and
                coordinating awareness campaigns.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">9.20</div>
                <div className="stat-label">CGPA / 10</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">AI Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">2</div>
                <div className="stat-label">Months Intern</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">22</div>
                <div className="stat-label">Languages (NLP)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="section research-section">
        <div className="section-inner">
          <div className="section-label">
            <span>02</span> Research Interests
          </div>
          <h2 className="section-title">What I explore</h2>
          <div className="research-grid">
            {[
              {
                icon: '🧠',
                title: 'Large Language Models',
                desc: 'Fine-tuning, instruction learning, and evaluating LLMs for low-resource and multilingual tasks.',
              },
              {
                icon: '🌐',
                title: 'Multilingual NLP',
                desc: 'Building unified models for Indian languages — transliteration, normalization, punctuation restoration.',
              },
              {
                icon: '🔍',
                title: 'Retrieval-Augmented Generation',
                desc: 'Combining semantic retrieval with LLM generation for accurate, grounded question answering.',
              },
              {
                icon: '⚙️',
                title: 'Predictive Maintenance',
                desc: 'ML pipelines for industrial failure prediction using ensemble methods and composite risk scoring.',
              },
              {
                icon: '🚀',
                title: 'AI Systems Engineering',
                desc: 'Designing scalable, production-ready AI backends with REST APIs, vector databases, and Docker.',
              },
              {
                icon: '📊',
                title: 'Data-Driven Decision Making',
                desc: 'Applying machine learning to real-world datasets for actionable, interpretable insights.',
              },
            ].map((item) => (
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
            <span>03</span> Skills
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

      {/* PERSONAL DETAILS */}
      <section className="section details-section">
        <div className="section-inner">
          <div className="section-label">
            <span>04</span> Personal Details
          </div>
          <h2 className="section-title">Get to know me</h2>
          <div className="details-card">
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-value">Puchalapalli Harika</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+91 83744 47884</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Personal Email</span>
              <a className="detail-value detail-link" href="mailto:harikapuchalapalli@gmail.com">
                harikapuchalapalli@gmail.com
              </a>
            </div>
            <div className="detail-row">
              <span className="detail-label">LinkedIn</span>
              <a
                className="detail-value detail-link"
                href="https://linkedin.com/in/harika-p-622557288"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/harika-p-622557288
              </a>
            </div>
            <div className="detail-row">
              <span className="detail-label">University</span>
              <span className="detail-value">Mahindra University, Hyderabad</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Degree</span>
              <span className="detail-value">B.Tech in Artificial Intelligence (2023–2027)</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">CGPA</span>
              <span className="detail-value">9.20 / 10</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location</span>
              <span className="detail-value">Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-name">Puchalapalli Harika</p>
          <p className="footer-sub">AI Engineer · Mahindra University · 2027</p>
          <div className="footer-links">
            <a href="mailto:harikapuchalapalli@gmail.com">Email</a>
            <a href="https://linkedin.com/in/harika-p-622557288" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="footer-copy">© 2025 Harika Puchalapalli. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}
