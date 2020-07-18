import React, { useCallback, useContext } from 'react';
import './stylesheet.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/fontawesome-free-brands';
import { UserContext } from '../../contexts';
import { Redirect } from 'react-router-dom';

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);

  const handleSignIn = useCallback(() => {
    setUser({
      name: '제이슨',
      tier: 4,
      avatar_url: require('../../images/profile/me.jpg'),
      coin: 128,
    });
  }, []);

  if (user) {
    return (
      <Redirect to="/"/>
    )
  }

  return (
    <div className="SignIn">
      <div className="title">
        Welcome to CodIn
      </div>
      <div className="divider"/>
      <Button className="fb-button" onClick={handleSignIn}>
        <FontAwesomeIcon className="icon" icon={faFacebook}/>
        Facebook으로 계속하기
      </Button>
      <Button className="gh-button" onClick={handleSignIn}>
        <FontAwesomeIcon className="icon" icon={faGithub}/>
        GitHub으로 계속하기
      </Button>
      <div className="or">
        또는
      </div>
      <Button secondary className="contact-button">
        CodIn에게 문의하기
      </Button>
    </div>
  );
}
