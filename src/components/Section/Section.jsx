import React from 'react';
import styles from '../Section/Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.statistics}>{title}</h2>
    {children}
  </section>
);

export default Section;
