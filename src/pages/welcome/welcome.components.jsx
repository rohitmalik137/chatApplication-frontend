import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './welcome.styles.scss';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Welcome to Rohit's Personal Chatting App</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) =>
            !name || !room || name === 'admin' ? event.preventDefault() : null
          }
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
