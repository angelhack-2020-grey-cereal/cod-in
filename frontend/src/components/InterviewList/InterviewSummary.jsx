import React, { useContext } from 'react';
import './stylesheet.scss';
import { UserContext } from '../../contexts';
import { classes } from '../../common/utils';
import { Link } from 'react-router-dom';

export default function InterviewSummary({ interview }) {
  const { user: me } = useContext(UserContext);
  const {
    role,
    user: you,
    accepted,
    time,
    comments,
  } = interview;

  return (
    <Link className="InterviewSummary" to={`/review/${interview.id}`}>
      <div className="chat-header">
        <div>
          <span
            className="text-bold">{you.name} (Tier {you.tier}) 님</span>{role === 'interviewee' ? '으로부터' : '에게'}&nbsp;
          {accepted ? (
            <span className="text-primary text-bold">합격</span>
          ) : (
            <span className="text-red text-bold">불합격</span>
          )}
          을 {role === 'interviewee' ? '받으셨습니다.' : '주셨습니다.'}
        </div>
        <div className="text-gray">{time}{' >'}</div>
      </div>
      <div className="chat-container">
        {
          comments.map((comment, i) => {
            const user = comment.me ? me : you;
            return (
              <div className={classes('chat', (role === 'interviewer' ^ comment.me) ? 'right' : 'left')}
                   key={i}>
                <div className="chat-text">
                  {comment.value}
                </div>
                <div className="user">
                  <div className="avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}/>
                  <div className="label">{user.name} (Tier {user.tier})</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </Link>
  );
}
