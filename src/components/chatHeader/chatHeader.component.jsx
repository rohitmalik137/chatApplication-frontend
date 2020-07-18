import React from 'react';

import closeIcon from '../../assets/closeIcon.png';
import onlineIcon from '../../assets/onlineIcon.png';
import './chatHeader.styles.scss';

const ChatHeader = ({ room }) => (
  <div className="header">
    <div className="left">
      <img className="onlineIcon" src={onlineIcon} alt="chat-app-icon" />
      <p className="roomName">{room}</p>
    </div>
    <div className="right">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default ChatHeader;
