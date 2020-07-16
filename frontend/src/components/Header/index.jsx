import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.scss';

export default function Header() {
  return (
    <div className="Header">
      <h1>
        <Link to="/">codIt</Link>
      </h1>
      <h1>
        {} 님 (Tier 3) 256 엔젤코인
      </h1>
    </div>
  );
}
