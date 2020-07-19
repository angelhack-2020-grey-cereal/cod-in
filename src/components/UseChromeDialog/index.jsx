import React from 'react';
import './stylesheet.scss';
import Button from '../Button';

export default function UseChromeVideo({ onConfirm }) {
  return (
    <div className="UseChromeVideo">
      <iframe src="/fireworks.html" width="100%" height="100%"/>
      <div className="card">
        <div className="text">
          현재 CodIn은 Chrome에 최적화되어 있습니다.<br/>
          이외 브라우저에서는 인터뷰 관련 기능이<br/>
          정상작동하지 않을 수 있습니다.
        </div>
        <div className="blackpink">
          <div className="avatar" style={{ backgroundImage: `url(${require('../../images/chrome.png')})` }}/>
        </div>
        <div className="button-container">
          <Button className="reject" secondary onClick={onConfirm}>
            무시하고 계속하기
          </Button>
        </div>
      </div>
    </div>
  );
}
