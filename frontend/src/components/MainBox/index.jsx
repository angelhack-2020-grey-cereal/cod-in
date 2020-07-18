import React from "react";
import ChatBox from "./ChatBox";
import ParticipateButton from './ParticipateButton';
import MoreButton from './MoreButton';
import "./stylesheet.scss";

export default function MainBox({ purpose }) {
  return (
    <div className="Mainbox">
      <div className="group">
        <ParticipateButton purpose={purpose} />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <MoreButton />
      </div>
    </div>
  );
}
