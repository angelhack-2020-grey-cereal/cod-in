import React from "react";
import { Link } from "react-router-dom";
import "./stylesheet.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={require("../../images/logo.svg")} />
        </Link>
        <div className="divider">
          <div>shop</div>
          <div>profile</div>
        </div>
      </div>
    </div>
  );
}
