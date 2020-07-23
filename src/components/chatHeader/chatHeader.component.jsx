import React, { Component } from 'react';

import closeIcon from '../../assets/closeIcon.png';
import UsersList from '../usersList/usersList.component';
import './chatHeader.styles.scss';

class ChatHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleUsersList: false,
    };
  }

  toggleBar = () => {
    this.setState({ toggleUsersList: !this.state.toggleUsersList });
  };

  render() {
    const { room, users } = this.props;
    return (
      <div className="chatHeader__Outer-Container">
        <div className="header">
          <div className="left" onClick={this.toggleBar}>
            <p className="roomName">{room}</p>
          </div>
          <div className="right">
            <a href="/">
              <img src={closeIcon} alt="close" />
            </a>
          </div>
        </div>
        <div className="userListComponent__Container">
          {this.state.toggleUsersList ? <UsersList users={users} /> : null}
        </div>
      </div>
    );
  }
}

export default ChatHeader;
