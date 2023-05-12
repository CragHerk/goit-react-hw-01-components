import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles['transaction-history__table']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr
            key={item.id}
            className={`${styles['transaction-history__table']} ${
              styles[item.type]
            }`}
          >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
