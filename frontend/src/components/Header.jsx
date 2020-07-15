import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

const HeaderDiv = styled.div`
  background-color: white;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
`

export default function Header() {
  return (
    <HeaderDiv>
      <h1>
        <Link to="/">codIt</Link>
      </h1>
      <h1>
        {} 님 (Tier 3) 256 엔젤코인
      </h1>
    </HeaderDiv>
  )
}