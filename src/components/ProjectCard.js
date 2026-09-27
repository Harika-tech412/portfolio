import React from 'react';
import { Link } from 'react-router-dom';
import { spotlightHandlers } from './Reveal';
import { ArrowRightIcon, GitHubIcon, ArrowUpRightIcon } from './Icons';
import './ProjectCard.css';

export function StatusBadge({ project }) {
  return (
    <>
      {project.status && <span className="pc__status"><span className="pc__status-dot" />{project.status}</span>}
      {project.team && <span className="pc__team">{project.team}</span>}
    </>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const p = project;
  const maxStack = featured ? 10 : 5;
  const stack = p.stack.slice(0, maxStack);
  const extra = p.stack.length - stack.length;

  return (
    <article
      className={`pc card spotlight ${featured ? 'pc--featured' : ''}`}
      style={{ '--pc': p.accent }}
      {...spotlightHandlers()}
    >
      <div className="pc__main">
        <div className="pc__meta">
          <span className="pc__cat">{p.category}</span>
          <span className="pc__period">{p.period}</span>
        </div>

        <h3 className="pc__title">
          <Link to={`/projects/${p.slug}`} className="pc__link">{p.title}</Link>
        </h3>
        <div className="pc__badges"><StatusBadge project={p} /></div>

        <p className="pc__tagline">{p.tagline}</p>

        {p.metrics?.length > 0 && (
          <div className="pc__metrics">
            {p.metrics.slice(0, featured ? 3 : 2).map((m) => (
              <div className="pc__metric" key={m.label}>
                <div className="pc__metric-v">{m.value}</div>
                <div className="pc__metric-l">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {!featured && (
          <div className="pc__flow" aria-label="Pipeline">
            {p.flow.map((s, i) => (
              <span className="pc__flow-item" key={s}>
                {i > 0 && <span className="pc__arrow" aria-hidden="true">→</span>}
                <span className="pc__node">{s}</span>
              </span>
            ))}
          </div>
        )}

        <div className="chips pc__stack">
          {stack.map((s) => <span className="chip" key={s}>{s}</span>)}
          {extra > 0 && <span className="chip">+{extra}</span>}
        </div>

        <div className="pc__footer">
          <span className="pc__cta">Read case study <ArrowRightIcon /></span>
          {p.repo ? (
            <a className="pc__gh" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.short} on GitHub`}>
              <GitHubIcon /> <span>Code</span> <ArrowUpRightIcon className="pc__ext" />
            </a>
          ) : p.links?.[0] && (
            <a className="pc__gh" href={p.links[0].url} target="_blank" rel="noreferrer">
              <span>{p.links[0].label}</span> <ArrowUpRightIcon className="pc__ext" />
            </a>
          )}
        </div>
      </div>

      {featured && (
        <div className="pc__diagram" aria-label="Architecture">
          <div className="pc__diagram-title">Architecture</div>
          <ol>
            {p.architecture.map((s, i) => (
              <li key={s.title}>
                <span className="pc__step">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="pc__step-t">{s.title}</div>
                  <div className="pc__step-d">{s.short}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}
