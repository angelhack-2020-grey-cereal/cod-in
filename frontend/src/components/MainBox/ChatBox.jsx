import React from "react";
import "./stylesheet.scss";

export default function ChatBox({
  purpose,
  user,
  result,
  time,
  comment_from,
  comment_to,
  profile_src,
}) {
  return (
    <div className="ChatBox">
      {
        {
          challenger: (
            <>
              <div className="chat-header">
                <div>
                  <span className="text-border">{user}</span>으로부터{" "}
                  {result ? (
                    <span className="text-primary">합격</span>
                  ) : (
                    <span className="text-red">불합격</span>
                  )}
                  을 받으셨습니다.
                </div>
                <div className="text-gray">{time}{' >'}</div>
              </div>
              <div className="chat-container">
                <div className="chat-container-left">
                  <div className="chat-interviewer">
                    <div className="chat-content-i">
                      {comment_from}
                      <div className="name-container-i">
                        <img className="profile-i" src={profile_src} alt="profile" />
                        <div className="font-i">&nbsp;{user}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-container-right">
                  <div className="chat-challenger">
                    <div className="chat-content-c">
                      {comment_to}
                      <div className="name-container-c">
                        <img
                          className="profile-c"
                          src={require("../../images/profile/me.jpg")}
                          alt="profile"
                        />
                        <div className="font-c">&nbsp;Gil Dong 님 (Tier 3)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
          interviewer: (
            <>
              <div className="chat-header">
                <div>
                  <span className="text-border">{user}</span>에게{" "}
                  {result ? (
                    <span className="text-primary">합격</span>
                  ) : (
                    <span className="text-red">불합격</span>
                  )}
                  을 주셨습니다.
                </div>
                <div className="text-gray">{time}{' >'}</div>
              </div>
              <div className="chat-container">
                <div className="chat-container-right">
                  <div className="chat-challenger">
                    <div className="chat-content-c">
                      {comment_to}
                      <div className="name-container-c">
                        <img
                          className="profile-c"
                          src={require("../../images/profile/me.jpg")}
                          alt="profile"
                        />
                        <div className="font-c">&nbsp;Gil Dong 님 (Tier 3)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-container-left">
                  <div className="chat-interviewer">
                    <div className="chat-content-i">
                      {comment_from}
                      <div className="name-container-i">
                        <img className="profile-i" src={profile_src} alt="profile" />
                        <div className="font-i">&nbsp;{user}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
        }[purpose]
      }
    </div>
  );
}
