import React, { useContext } from 'react';
import './stylesheet.scss';
import Button from '../Button';
import { UserContext } from '../../contexts';

export default function PromotionDialog({ onConfirm }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="PromotionDialog">
      <div className="card">
        <div className="text">
          축하드립니다 <span className="name">{user.name}</span>님.<br/>
          <span className="role">Tier {user.tier + 1}</span>로 승급하셨습니다!
        </div>
        <div className="blackpink">
          <div className="avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}/>
        </div>
        <div className="button-container">
          <Button secondary onClick={() => {
            setUser({
              ...user,
              tier: user.tier + 1,
            });
            onConfirm();
          }}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
