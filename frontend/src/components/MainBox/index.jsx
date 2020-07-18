import React from 'react';
import ChatBox from './ChatBox';
import MoreButton from './MoreButton';

import intervieweeReview from '../../assets/main_comment/interviewee_review.json';
import interviewerReview from '../../assets/main_comment/interviewer_review.json';

import './stylesheet.scss';
import Button from '../Button';

export default function MainBox({ role }) {
  return (
    <div className="Mainbox">
      <div className="group">
        <Button className="participate" to="/matching/interviewer">
          면접자로 참여하기 <span className="text-border">(+30 Angel)</span>
        </Button>
        {
          {
            'interviewee': (
              intervieweeReview.map(({ id, user, result, time, comment_from, comment_to, profile_src }) => {
                return (
                  <ChatBox
                    key={id}
                    role={role}
                    user={user}
                    result={result}
                    time={time}
                    comment_from={comment_from}
                    comment_to={comment_to}
                    profile_src={profile_src}
                  />
                );
              })
            ),
            'interviewer': (
              interviewerReview.map(({ id, user, result, time, comment_from, comment_to, profile_src }) => {
                return (
                  <ChatBox
                    key={id}
                    role={role}
                    user={user}
                    result={result}
                    time={time}
                    comment_from={comment_from}
                    comment_to={comment_to}
                    profile_src={profile_src}
                  />
                );
              })
            ),
          }[role]
        }
        <MoreButton/>
      </div>
    </div>
  );
}
