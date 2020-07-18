import React from 'react';

import InterviewList from '../../components/InterviewList';
import mockInterviews from '../../assets/mocks/interviews';
import './stylesheet.scss';

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="main-group">
        <InterviewList role="interviewee"
                       interviews={mockInterviews.filter(interview => interview.role === 'interviewee')}/>
        <InterviewList role="interviewer"
                       interviews={mockInterviews.filter(interview => interview.role === 'interviewer')}/>
      </div>
    </div>
  );
}
