import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './stylesheet.scss';
import mockUsers from '../../assets/mocks/users';
import Button from '../../components/Button';
import { UserContext } from '../../contexts';
import Avatar from './Avatar';

export default function MatchingPage({ match }) {
  const { role } = match.params;
  const { user: me } = useContext(UserContext);
  const history = useHistory();
  const [you, setYou] = useState(null);

  useEffect(() => {
    let timeoutId = window.setTimeout(() => {
      timeoutId = null;
      history.push('/interview');
    }, 8000);
    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    let timeoutId = window.setTimeout(() => {
      timeoutId = null;
      setYou(mockUsers[1]);
    }, 4500);
    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!['interviewer', 'interviewee'].includes(role)) {
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <div className="MatchingPage">
      <div className="matching-wrapper">
        <div className="header">
          <Button className="cancel" to="/">
            매칭 취소하기
          </Button>
        </div>
        <div className="center">
          {
            you ? (
              <div className="connected">
                면접자 {you.name} (Tier {you.tier}) 님과의 인터뷰
              </div>
            ) : (
              <div className="connecting">
                {
                  {
                    interviewee: '면접자',
                    interviewer: '지원자',
                  }[role]
                }
                &nbsp;매칭중 ···
              </div>
            )
          }
          <div className="avatar-container">
            {
              role === 'interviewer' &&
              <Avatar user={you}/>
            }
            <Avatar user={me} role={role}/>
            {
              role === 'interviewee' &&
              <Avatar user={you}/>
            }
          </div>
          <div className="description">
            매칭이 진행중입니다.<br/>나보다 높은 Tier의 면접자를 만날 수 있습니다.<br/>잠시만 기다려주세요.
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
