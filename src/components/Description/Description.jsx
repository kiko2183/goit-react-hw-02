import React from 'react';
import styles from './Description.module.css';

const Description = ({ text }) => (
  <p className={styles.description}>{text}</p>
);

export default Description;
