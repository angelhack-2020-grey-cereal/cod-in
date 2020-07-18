import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import './stylesheet.scss';

export default function ParticipateButton() {
  return (
    <div className="ParticipateButton">
      <div className="text-box">
        <FontAwesomeIcon className="icon" calssName="chevronDown" icon={faClock} size="lg" />
        <div className="text-line">
          &nbsp;AM 07:20 ~ AM 08:20 Hot Time 적용 
          <div>Angel <span className="emphasis">+20 추가 획득 기회!</span></div>
        </div>
      </div>
      <button
        className="participate-button"
        type="button" 
      >
        지원자로 참여하기 (-30 Angel)
      </button>
    </div>
  );
}
