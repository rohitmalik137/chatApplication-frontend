import React from 'react';
import ReactEmoji from 'react-emoji';

import './message.styles.scss';

const Message = ({ message: { user, text }, name }) => {
  let msgByCurrentUser = false;
  // console.log(user, text, name);
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) msgByCurrentUser = true;

  return user === 'admin' ? (
    <div className="adminGeneratedContainer">
      <span className="adminGeneratedContainer__text">{text}</span>
    </div>
  ) : msgByCurrentUser ? (
    <div className="myMsg end">
      <div className="myMsg__inner userMe">
        <span className="myMsg__inner--header">{trimmedName}</span>
        <span className="adminGeneratedContainer__text">
          {ReactEmoji.emojify(text)}
        </span>
      </div>
    </div>
  ) : (
    <div className="myMsg start">
      <div className="myMsg__inner">
        <span className="myMsg__inner--header">{user}</span>
        <span className="adminGeneratedContainer__text">
          {ReactEmoji.emojify(text)}
        </span>
      </div>
    </div>
  );
};

export default Message;
