import React from 'react';

import { Link } from 'react-router-dom';

import './App.css'

export default function Header() {

  return (
    <div className="App-header">
      <h1>
        <Link to="/">codIt</Link>
      </h1>
      <h1>
        user blah blah
      </h1>
    </div>
  )
}