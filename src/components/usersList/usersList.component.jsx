import React from 'react';

import './usersList.styles.scss';

const UsersList = ({ users }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <div className="usersList__Header-Container">
        <i className="fa fa-arrow-left left-arrow" aria-hidden="true"></i>
        Users in this room:
      </div>
      {users
        ? users.map(({ name }) => (
            <div key={name} className="activeItem">
              {name}
            </div>
          ))
        : null}
    </div>
  </div>
);

export default UsersList;
