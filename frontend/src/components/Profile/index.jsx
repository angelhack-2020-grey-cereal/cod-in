import React from 'react';
import './stylesheet.scss';

export default function Profile({ user, role, simple }) {
  return (
    <div className="Profile">
      {!simple && <div className="avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}/>}
      {!simple && role && <div className="role">{role === 'interviewee' ? '지원자' : '면접자'}&nbsp;</div>}
      <div className="label">{user.name} (Tier {user.tier})</div>
    </div>
  );
}
