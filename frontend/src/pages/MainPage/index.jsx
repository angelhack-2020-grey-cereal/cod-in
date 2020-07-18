import React from 'react';

import MainBox from '../../components/MainBox';
import './stylesheet.scss';

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="main-group">
        <MainBox purpose="challenger" />
        <MainBox purpose="interviewer" />
      </div>
    </div>
  );
}
