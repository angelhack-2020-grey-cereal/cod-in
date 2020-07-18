import React from 'react';
import InterviewSummary from './InterviewSummary';
import MoreButton from './MoreButton';

import './stylesheet.scss';
import Button from '../Button';

export default function InterviewList({ role, interviews }) {
  return (
    <div className="InterviewList">
      <Button className="participate" to="/matching/interviewer">
        {role === 'interviewee' ? '지원자' : '면접자'}로 참여하기&nbsp;&nbsp;<span className="text-border">+30 Angel</span>
      </Button>
      {
        interviews.map(interview => (
          <InterviewSummary key={interview.id} interview={interview}/>
        ))
      }
      <MoreButton/>
    </div>
  );
}
