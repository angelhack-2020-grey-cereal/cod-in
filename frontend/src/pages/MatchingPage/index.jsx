import React from 'react';
import './stylesheet.scss';
import { Redirect } from 'react-router-dom';

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
          <button>
            매칭 취소하기
          </button>
        </div>
        <div className="center">
          <div className="connecting">
            면접자 연결중 ...
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
            곧 매칭이 시작됩니다.<br/>나보다 높은 Tier의 면접자를 만날 수 있습니다.<br/>잠시만 기다려주세요.
          </div>
          <div className="footer-text">
            CodIn
          </div>
        </div>
      </div>
    </div>
  );
}
