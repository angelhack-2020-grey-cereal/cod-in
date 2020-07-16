
import React from 'react';
import Webcam from 'react-webcam';
import './stylesheet.scss';

export default function InterviewSidebarContainer () {
  return (
    <div className="InterviewSidebarContainer">
      <h1>문제 1</h1>
      <h1>문제 2</h1>
      <div className="Webcam">
        <Webcam
          audio={true}
          height={200}
          width={250}
          videoConstraints={{ height: 200, width: 250 }}
        />
        <Webcam
          audio={true}
          height={200}
          width={250}
          videoConstraints={{ height: 200, width: 250 }}
        />
      </div>
      <button 
        className="CloseButton"
        type='button'
      >
        테스트 종료하기
      </button>
    </div>
  )
}
