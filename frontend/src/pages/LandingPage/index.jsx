import React from 'react';
import './stylesheet.scss';
import SignIn from '../../components/SignIn';

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="content-wrapper">
        <div className="text-container">
          <div className="slogan">
            코딩 테스트의 어려움,<br/>
            답은 <span className="bold">코드인</span>에서!
          </div>
          <div className="description">
            멘토부터 멘티까지 다양한 참여 기회로<br/>
            나에게 딱 맞는 솔루션을 제공 중<br/>
            코드인만의 특별함과 함께하세요.
          </div>
        </div>
        <div className="dialog">
          <SignIn/>
        </div>
      </div>
    </div>
  );
}
