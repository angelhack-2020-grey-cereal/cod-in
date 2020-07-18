import React from 'react';
import './stylesheet.scss';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button';

export default function MatchingPage({ match }) {
  const { mode } = match.params;

  if (!['interview', 'review'].includes(mode)) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <div className="MatchingPage">
      <div className="matching-wrapper">
        <div className="header">
          <Button className="cancel">
            매칭 취소하기
          </Button>
        </div>
        <div className="center">
          <div className="connecting">
            면접자 연결중 ···
          </div>
          <div className="description">
            곧 매칭이 시작됩니다.<br/>나보다 높은 Tier의 면접자를 만날 수 있습니다.<br/>잠시만 기다려주세요.
          </div>
          <div className="progress-bar">
            <div className="active"/>
          </div>
        </div>
        <div className="footer">
          <div className="tip-title">
            TIP
          </div>
          <div className="tip">
            코딩 인터뷰를 진행할 경우, 과도한 긴장은 좋지 않습니다.<br/>긴장을 푸는 방법은 많이 풀어보는 것. CodIn과 함께 긴장을 풀어보아요!
          </div>
          <div className="footer-text">
            CodIn
          </div>
        </div>
      </div>
    </div>
  );
}
