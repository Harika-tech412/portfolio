import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          H
          <span className="logo-bracket">/&gt;</span>
        </NavLink>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <a
            href="/Harika_Resume.pdf"
            download
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
          <a
            href="mailto:harikapuchalapalli@gmail.com"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
