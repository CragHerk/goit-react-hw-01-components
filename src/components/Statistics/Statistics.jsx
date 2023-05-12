import React from 'react';
import PropTypes from 'prop-types';
import getRandomColor from 'utils/getRandomColor';
import styles from './statistics.module.css';

function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
