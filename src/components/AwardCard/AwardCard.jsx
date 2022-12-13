import React from 'react';
import styles from './AwardCard.module.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="award" />
      <div className={styles.content}>
        <p className="p__cormorant" style={{ color: '#Dcca87' }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
