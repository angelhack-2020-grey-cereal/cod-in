import React from 'react';
import Webcam from 'react-webcam';

export default function InterviewPage() {
  return (
    <div>
      <Webcam
        audio={true}
        height={300}
        width={300}
        videoConstraints={{ width: 300, height: 300 }}
      /> 
    </div>
  )
}