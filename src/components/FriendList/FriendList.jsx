import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
