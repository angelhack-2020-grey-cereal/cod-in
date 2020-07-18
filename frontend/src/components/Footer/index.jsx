import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/fontawesome-free-brands';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="link-container">
        <div className="footer-wrapper">
          <div className="left">
            <a className="link" href="#">이용약관</a>
            <a className="link" href="#">개인정보처리방침</a>
          </div>
          <div className="right">
            <a className="link" href="#">
              <FontAwesomeIcon fixedWidth icon={faFacebook}/>
            </a>
            <a className="link" href="#">
              <FontAwesomeIcon fixedWidth icon={faYoutube}/>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="footer-wrapper">
          © Copyright 2020 CodIn Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
