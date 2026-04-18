import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Unified Multilingual NLP Model for Indian Languages',
    tag: 'NLP · LLM · Fine-tuning',
    color: '#8b5cf6',
    description:
      'A unified model supporting 22 languages for transliteration, normalization across 12 languages, and punctuation restoration across 23 languages — all in a single architecture.',
    highlights: [
      'Supervised fine-tuned Gemma-3-1B-PT using multi-task instruction learning',
      'Created large-scale multilingual datasets using Gemini 2.0 Flash (synthetic + native)',
      'Benchmarked against Sarvam using BLEU, CER, WER, ChrF++ metrics',
    ],
    tools: ['Python', 'HuggingFace Transformers', 'PyTorch', 'Gemini 2.0 Flash', 'Datasets'],
    github: 'https://github.com/Sneha-260805/NPT',
  },
  {
    id: 2,
    title: 'RAG System for Document Question Answering',
    tag: 'RAG · NLP · Backend · DevOps',
    color: '#06b6d4',
    description:
      'An end-to-end Retrieval-Augmented Generation pipeline for PDF-based QA — from document ingestion and chunking to semantic retrieval and LLM-powered answer generation.',
    highlights: [
      'Built full RAG pipeline: chunking → embeddings → vector search → LLM generation',
      'Deployed RESTful APIs with Django REST Framework for upload, indexing, and querying',
      'Containerized the entire system using Docker and docker-compose',
    ],
    tools: ['Python', 'Django REST Framework', 'Transformers', 'Milvus (Vector DB)', 'Docker', 'Postman'],
  },
  {
    id: 3,
    title: 'Hybrid Predictive Maintenance (NASA CMAPSS)',
    tag: 'ML · Data Science · Ensemble',
    color: '#f472b6',
    description:
      'A multi-stage predictive maintenance pipeline using the enhanced NASA CMAPSS dataset. Combines clustering, classification, and regression to produce a composite risk score.',
    highlights: [
      'Multi-stage pipeline: Weighted K-Means → RF/XGBoost classifier → Ridge Regressor',
      'Composite Risk Score combining failure probability with stage-wise Remaining Useful Life (RUL)',
      'Achieved interpretable, stage-aware predictions for industrial maintenance scheduling',
    ],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'XGBoost'],
  },
];

export default function Projects() {
  return (
    <div className="page projects-page">
      <div className="orb orb-proj-1"></div>
      <div className="orb orb-proj-2"></div>

      <div className="projects-inner">
        <div className="projects-header">
          <div className="section-label">
            <span>Projects</span>
          </div>
          <h1 className="projects-title">
            Things I've <span className="title-accent">built</span>
          </h1>
          <p className="projects-sub">
            A selection of AI & ML projects — from multilingual language models to production-grade
            RAG systems and predictive analytics pipelines.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <div className="project-card" key={project.id} style={{ '--card-accent': project.color }}>
              <div className="project-number">0{i + 1}</div>
              <div className="project-content">
                <div className="project-tag">{project.tag}</div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="highlight-arrow">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-footer">
                  <div className="project-tools">
                    {project.tools.map((tool) => (
                      <span className="tool-tag" key={tool}>{tool}</span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="github-cta">
          <p>Want to see more?</p>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Visit my GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}