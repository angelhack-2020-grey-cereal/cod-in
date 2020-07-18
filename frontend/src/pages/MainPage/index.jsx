import React from 'react';

import InterviewList from '../../components/InterviewList';
import interviews from '../../assets/interviews.json';
import './stylesheet.scss';

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="main-group">
        <InterviewList role="interviewee"
                          interviews={interviews.filter(interview => interview.role === 'interviewee')}/>
        <InterviewList role="interviewer"
                          interviews={interviews.filter(interview => interview.role === 'interviewer')}/>
      </div>
    </div>
  );
}
