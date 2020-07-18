import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import './stylesheet.scss';
import Button from '../Button';

export default function ParticipateButton({ purpose }) {
  return (
    <div className="ParticipateButton">
      {
        {
          "interviewee": (
            <>
              <div className="text-box"></div>
              <Button to="/matching/interviewee">
                지원자로 참여하기 <span className="text-border">(-30 Angel)</span>
              </Button>
            </>
          ),
          "interviewer": (
            <>
              <div className="text-box">
                <FontAwesomeIcon icon={faClock} size="lg"/>
                <div className="text-line">
                  &nbsp;AM 07:20 ~ AM 08:20 Hot Time 적용
                  <div>Angel <span className="emphasis">+20 추가 획득 기회!</span></div>
                </div>
              </div>
              <Button to="/matching/interviewer">
                면접자로 참여하기 <span className="text-border">(+30 Angel)</span>
              </Button>
            </>
          )
        }[purpose]
      }
    </div>
  );
}
