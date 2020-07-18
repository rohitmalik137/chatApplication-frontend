import React from 'react';
// import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

import './customInput.styles.scss';

const CustomInput = ({ message, setMessage, sendMessage }) => {
  // const addEmoji = (e) => {
  //   let emoji = e.native;
  //   console.log(emoji);
  // };
  return (
    <div className="customInputOuterContainer">
      {/* <span>
        <Picker on={(event) => setMessage(event.native)} />
      </span> */}
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="type a message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === 'Enter' ? sendMessage(event) : null
          }
        />
        <button className="send" onClick={(event) => sendMessage(event)}>
          Send
        </button>
      </form>
    </div>
  );
};

export default CustomInput;
