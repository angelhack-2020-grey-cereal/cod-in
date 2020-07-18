import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.scss';
import { UserContext } from '../../contexts';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const { user: me } = useContext(UserContext);
  return (
    <div className="Header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={require('../../images/logo-white.png')} alt="logo"/>
        </Link>
        <div className="divider">
          <div>About us</div>
          <div className="divide">|</div>
          <div>Shop</div>
          <div className="divide">|</div>
          <div>Leader Board</div>
          <div className="divide">|</div>
          <div className="user">
            <div className="avatar" style={{ backgroundImage: `url(${me.avatar_url})` }}/>
            <div className="info">
              <div className="label">
                <div className="name">{me.name} </div>
                <div className="tier">(Tier {me.tier})</div>
              </div>
              <div className="balance"><FontAwesomeIcon className="icon" icon={faCoins}/>{me.coin} Angel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
