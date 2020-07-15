
import React from 'react';
import Webcam from 'react-webcam';
import styled from '@emotion/styled'

const Sidebar = styled.div`
  height: calc(100% - 200px);
  width: 300px;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;  
`

export default function InterviewSidebarContainer () {
  return (
    <Sidebar>
      <h1>문제 1</h1>
      <h1>문제 2</h1>
      <Webcam
        audio={true}
        height={300}
        width={300}
        videoConstraints={{ width: 300, height: 300 }}
      />     
      <Webcam
        audio={true}
        height={300}
        width={300}
        videoConstraints={{ width: 300, height: 300 }}
      />     
      <button type='button'>테스트 종료하기</button>
    </Sidebar>
  )
}
