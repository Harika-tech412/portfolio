import React from 'react';
import { contact } from '../data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} Puchalapalli Harika · Designed & built with React</p>
        <div className="footer__links">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${contact.email}`} aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
