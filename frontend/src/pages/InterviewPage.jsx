import React from 'react';
import styled from '@emotion/styled'

import InterviewSidebarContainer from '../components/InterviewSidebarContainer';


const Container = styled.div`
  height: calc(100% - 200px);
  width: calc(100% - 300px);
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  background-color: gray;
  overflow-x: hidden;
`


export default function InterviewPage() {
  return (
    <Container>
      <InterviewSidebarContainer />
    </Container>
  )
}