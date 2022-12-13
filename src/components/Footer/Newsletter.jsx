import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.heading}>
        <SubHeading title="Newsletter" />
        <h2 className="headtext__cormorant">Subscribe To Our Newsletter</h2>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className={`${styles.form} flex__center`}>
        <input type="email" placeholder="E-mail" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
