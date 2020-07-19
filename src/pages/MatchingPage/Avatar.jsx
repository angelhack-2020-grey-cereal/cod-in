import React from 'react';

export default function Avatar({ user, role }) {
  return user ? (
    <div className="Avatar" style={{ backgroundImage: `url(${user.avatar_url})` }}>
      <div className="role">
        {role === 'interviewee' ? '지원자' : '면접자'}
      </div>
      <div className="name">
        {user.name}
      </div>
    </div>
  ) : (
    <div className="Avatar"/>
  );
}
