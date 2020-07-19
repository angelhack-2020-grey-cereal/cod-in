import React from 'react';
import './stylesheet.scss';
import SignIn from '../../components/SignIn';

export default function SignInPage() {
  return (
    <div className="SignInPage">
      <div className="content-wrapper">
        <SignIn/>
      </div>
    </div>
  );
}
