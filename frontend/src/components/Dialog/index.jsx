import React from 'react';
import './stylesheet.scss';

export default function Dialog({ children }) {
  return (
    <div className="Dialog">
      <div className="card">
        {children}
      </div>
    </div>
  );
}
