import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <div className="page-top container not-found">
      <p className="code">404</p>
      <h1 className="h2">This page doesn't exist.</h1>
      <div>
        <Link to="/" className="btn btn-primary"><ArrowLeftIcon /> Back home</Link>
      </div>
    </div>
  );
}
