import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.scss';
import { UserContext } from '../../contexts';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';

export default function Header() {
  const { user: me, setUser } = useContext(UserContext);

  const handleSignOut = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <div className="Header">
      <div className="container">
        <Link to="/" className="logo-wrapper">
          <img className="logo" src={require('../../images/logo-white.png')} alt="logo"/>
        </Link>
        <Link to="/shop" className="link">Shop</Link>
        <a href="#" className="link">Leader Board</a>
        {
          me ? (
            <a href="#" className="user" onClick={handleSignOut}>
              <div className="avatar" style={{ backgroundImage: `url(${me.avatar_url})` }}/>
              <div className="info">
                <div className="label">
                  {me.name} (Tier {me.tier})
                  <FontAwesomeIcon className="icon" icon={faCaretDown} size="sm"/>
                </div>
                <div className="balance"><FontAwesomeIcon className="icon" icon={faCoins}/>{me.coin} Angel</div>
              </div>
            </a>
          ) : (
            <Link to="/sign-in" className="link">Sign In</Link>
          )
        }
      </div>
    </div>
  );
}
