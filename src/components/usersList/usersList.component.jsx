import React from 'react';

import './usersList.styles.scss';

const UsersList = ({ users }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
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
