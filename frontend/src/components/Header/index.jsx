import React from "react";
import { Link } from "react-router-dom";
import "./stylesheet.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={require("../../images/logo-white.svg")} />
        </Link>
        <div className="divider">
          <div>About us</div>
          <div className="divide">|</div>
          <div>Shop</div>
          <div className="divide">|</div>
          <div>Leader Board</div>
          <div className="divide">|</div>
          <div className="profile-container">
            <img className="profile-image" src={require("../../images/profile.jpg")} />
            <div>
              <div className="user-name">Gil Dong</div>
              <div className="user-tier">(Tier3 / 128 Angel)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
