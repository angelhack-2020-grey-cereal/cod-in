import React from "react";
import ChatBox from "./ChatBox";
import ParticipateButton from './ParticipateButton';
import MoreButton from './MoreButton';

import challengerReview from '../../assets/main_comment/challenger_review.json';
import interviewerReview from '../../assets/main_comment/interviewer_review.json';

import "./stylesheet.scss";

export default function MainBox({ purpose }) {
  return (
    <div className="Mainbox">
      <div className="group">
        <ParticipateButton purpose={purpose} />
        {
          {
            "challenger": (
              challengerReview.map(({ id, user, result, time, comment_from, comment_to, profile_src }) => {
                return (
                  <ChatBox 
                    key={id}
                    purpose={purpose}
                    user={user}
                    result={result}
                    time={time}
                    comment_from={comment_from}
                    comment_to={comment_to}
                    profile_src={profile_src}
                />
                )
              })
            ),
            "interviewer": (
              interviewerReview.map(({ id, user, result, time, comment_from, comment_to, profile_src }) => {
                return (
                  <ChatBox
                    key={id} 
                    purpose={purpose}
                    user={user}
                    result={result}
                    time={time}
                    comment_from={comment_from}
                    comment_to={comment_to}
                    profile_src={profile_src}
                />
                )
              })            
            )
          }[purpose]
        }
        <MoreButton />
      </div>
    </div>
  );
}
