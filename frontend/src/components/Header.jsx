import React from 'react';

import { Link } from 'react-router-dom';

import '../layout.css'

export default function Header() {

  return (
    <div className="App-header">
      <h1>
        <Link to="/">codIt</Link>
      </h1>
      <h1>
        {} 님 (Tier 3) 256 엔젤코인
      </h1>
    </div>
  )
}