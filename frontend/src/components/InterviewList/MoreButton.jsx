import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import './stylesheet.scss';

export default function MoreButton() {
  return (
    <div className="MoreButton">
      <div className="label">
        더보기
      </div>
      <FontAwesomeIcon className="icon" icon={faChevronDown} size="lg"/>
    </div>
  );
}
