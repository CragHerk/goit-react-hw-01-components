import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline
    ? styles['friendlist__status--online']
    : styles['friendlist__status--offline'];

  return (
    <li className={styles.friendlist__item}>
      <span className={`${styles.friendlist__status} ${statusClass}`}></span>
      <img
        className={styles.friendlist__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.friendlist__name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
