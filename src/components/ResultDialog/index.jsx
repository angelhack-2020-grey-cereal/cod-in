import React from 'react';
import './stylesheet.scss';
import Button from '../Button';

export default function ResultDialog({ user, onConfirm }) {
  return (
    <div className="ResultDialog">
      <div className="card">
        <div className="text">
          인터뷰가 종료되었습니다.<br/>
          <span className="role">지원자</span> <span className="name">{user.name} (Tier {user.tier})</span> 님의<br/>
          합격 여부를 선택해주세요.
        </div>
        <div className="blackpink">
          <div className="avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}/>
        </div>
        <div className="button-container">
          <Button className="accept" secondary onClick={onConfirm}>
            합격
          </Button>
          <Button className="reject" secondary onClick={onConfirm}>
            불합격
          </Button>
        </div>
      </div>
    </div>
  );
}
