import React from 'react';
import styles from './FooterOverlay.module.css';

const FooterOverlay = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.black} />
      <div className={`${styles.img} app__bg`} />
    </div>
  );
};

export default FooterOverlay;
