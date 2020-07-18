import React from 'react';
import InterviewSummary from './InterviewSummary';
import MoreButton from './MoreButton';

import './stylesheet.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';

export default function InterviewList({ role, interviews }) {
  return (
    <div className="InterviewList">
      <Button className="participate" to={`/matching/${role}`}>
        {role === 'interviewee' ? '지원자' : '면접자'}로 참여하기
        <div className="coin-wrapper">
          <FontAwesomeIcon className="icon" icon={faCoins}/>
          <span className="text-border">{role === 'interviewee' ? '-' : '+'}30 Angel</span>
        </div>
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
