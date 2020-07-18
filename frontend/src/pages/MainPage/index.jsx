import React, { useContext } from 'react';

import InterviewList from '../../components/InterviewList';
import './stylesheet.scss';
import { InterviewContext } from '../../contexts';

export default function MainPage() {
  const { interviews } = useContext(InterviewContext);

  return (
    <div className="MainPage">
      <div className="main-group">
        <InterviewList role="interviewee"
                       interviews={interviews
                         .filter(interview => interview.role === 'interviewee')
                         .sort((a, b) => b.timestamp - a.timestamp)
                       }/>
        <InterviewList role="interviewer"
                       interviews={interviews
                         .filter(interview => interview.role === 'interviewer')
                         .sort((a, b) => b.timestamp - a.timestamp)}/>
      </div>
    </div>
  );
}
