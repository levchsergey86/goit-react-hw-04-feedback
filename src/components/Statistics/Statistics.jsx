import React from 'react';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <div>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {total}</p>
      <p className={styles.text}>
        Positive Feedback:{' '}
        {isNaN(positivePercentage) ? 0 : positivePercentage.toFixed(0)}%
      </p>
    </div>
  );
};

export default Statistics;
