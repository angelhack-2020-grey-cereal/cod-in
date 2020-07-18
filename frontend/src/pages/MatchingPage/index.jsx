import React from 'react';
import './stylesheet.scss';
import { Redirect } from 'react-router-dom';

export default function MatchingPage({ match }) {
  const { mode } = match.params;

  if (!['interview', 'review'].includes(mode)) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <div className="MatchingPage">
    </div>
  );
}
