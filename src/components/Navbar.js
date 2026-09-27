import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contact } from '../data/profile';
import { DownloadIcon, MenuIcon, CloseIcon } from './Icons';
import './Navbar.css';

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (pathname !== '/') {
      setActive(pathname.startsWith('/projects') ? 'projects' : '');
      return;
    }
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" aria-label="Puchalapalli Harika, home">
          <span className="nav__mark">PH</span>
          <span className="nav__name">Puchalapalli Harika</span>
        </Link>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.id}
              to={`/#${l.id}`}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href={contact.resume} download className="btn btn-secondary nav__resume" onClick={() => setOpen(false)}>
            <DownloadIcon /> Resume
          </a>
        </nav>

        <button
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
