import React from 'react';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="friend-list__item">
      <span
        className="friend-list__status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className="friend-list__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-list__name">{name}</p>
    </li>
  );
}

export default FriendList;
