import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import CustomInput from '../../components/customInput/customInput.components';
import ChatHeader from '../../components/chatHeader/chatHeader.component';
import Messages from '../../components/messages/messages.components';
import './home.styles.scss';

let socket;

const HomePage = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  // const [roomData, setRoomData] = useState([]);
  const ENDPOINT = 'https://rohit-chatting-application.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    // console.log(socket);
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  // useEffect(() => {
  //   socket.on('roomData', (room, users) => {
  //     setRoomData(() => [...roomData, users]);
  //   });
  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  // console.log(message);
  return (
    <div className="outerContainer">
      <div className="msgContainer">
        <ChatHeader room={room} />
        <Messages messages={messages} name={name} />
        <CustomInput
          className="footer"
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default HomePage;
