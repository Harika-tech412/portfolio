import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { StatusBadge } from '../components/ProjectCard';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, GitHubIcon, CheckIcon, FileIcon } from '../components/Icons';
import { projects } from '../data/profile';
import NotFound from './NotFound';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];

  useEffect(() => {
    document.title = p ? `${p.short} | Puchalapalli Harika` : 'Not found | Puchalapalli Harika';
    return () => { document.title = 'Puchalapalli Harika | AI Engineer'; };
  }, [p]);

  if (!p) return <NotFound />;
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="cs page-top" style={{ '--pc': p.accent }}>
      <div className="cs__glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <Link to="/#projects" className="cs__back"><ArrowLeftIcon /> All projects</Link>
        </Reveal>

        <header className="cs__header">
          <Reveal className="cs__meta">
            <span className="cs__cat">{p.category}</span>
            <span className="cs__sep">·</span>
            <span>{p.period}</span>
          </Reveal>
          <Reveal as="h1" className="cs__title" delay={60}>{p.title}</Reveal>
          <Reveal className="cs__badges" delay={100}><StatusBadge project={p} /></Reveal>
          <Reveal as="p" className="cs__tagline" delay={120}>{p.tagline}</Reveal>
          <Reveal className="cs__actions" delay={180}>
            {p.repo && (
              <a className="btn btn-primary" href={p.repo} target="_blank" rel="noreferrer"><GitHubIcon /> View code</a>
            )}
            {p.links?.map((l) => (
              <a key={l.url} className={`btn ${p.repo ? 'btn-secondary' : 'btn-primary'}`} href={l.url} target="_blank" rel="noreferrer">
                {l.label.includes('report') ? <FileIcon /> : <ArrowUpRightIcon />} {l.label}
              </a>
            ))}
          </Reveal>
          {p.context && <Reveal as="p" className="cs__context" delay={220}>{p.context}</Reveal>}
        </header>

        {p.metrics?.length > 0 && (
          <Reveal className="cs__metrics" delay={120}>
            {p.metrics.map((m) => (
              <div className="cs__metric" key={m.label}>
                <div className="cs__metric-v">{m.value}</div>
                <div className="cs__metric-l">{m.label}</div>
              </div>
            ))}
          </Reveal>
        )}

        <div className="cs__layout">
          <div className="cs__main">
            <Reveal as="section" className="cs__section">
              <h2>Overview</h2>
              <p>{p.overview}</p>
            </Reveal>

            <Reveal as="section" className="cs__section">
              <h2>The problem</h2>
              <p>{p.problem}</p>
            </Reveal>

            <Reveal as="section" className="cs__section">
              <h2>How it works</h2>
              <ol className="cs__steps">
                {p.architecture.map((s, i) => (
                  <li key={s.title} className="cs__step">
                    <span className="cs__step-n">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <div className="cs__step-short">{s.short}</div>
                      <p>{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="section" className="cs__section">
              <h2>Engineering highlights</h2>
              <ul className="bullets cs__bullets">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </Reveal>

            {p.results.length > 0 && (
              <Reveal as="section" className="cs__section">
                <h2>Results</h2>
                <ul className="cs__results">
                  {p.results.map((r) => (
                    <li key={r}><CheckIcon /> <span>{r}</span></li>
                  ))}
                </ul>
              </Reveal>
            )}

            {p.note && <Reveal as="p" className="cs__note">{p.note}</Reveal>}
          </div>

          <aside className="cs__aside">
            <Reveal className="card cs__panel">
              <h2>At a glance</h2>
              <dl>
                <div><dt>Timeline</dt><dd>{p.period}</dd></div>
                {p.team && <div><dt>Type</dt><dd>{p.team}</dd></div>}
                {p.status && <div><dt>Status</dt><dd>{p.status}</dd></div>}
              </dl>
              <h3>Pipeline</h3>
              <div className="cs__flow">
                {p.flow.map((s, i) => (
                  <React.Fragment key={s}>
                    {i > 0 && <span className="cs__flow-arrow" aria-hidden="true">↓</span>}
                    <span className="cs__flow-node">{s}</span>
                  </React.Fragment>
                ))}
              </div>
              <h3>Tech stack</h3>
              <div className="chips">
                {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </Reveal>
          </aside>
        </div>

        <Reveal className="cs__next">
          <Link to={`/projects/${next.slug}`} className="card cs__next-card" style={{ '--pc': next.accent }}>
            <span className="cs__next-label">Next project</span>
            <span className="cs__next-title">{next.title}</span>
            <ArrowRightIcon className="cs__next-arrow" />
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
