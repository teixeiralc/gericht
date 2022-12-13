import React from 'react';

import styles from './MenuItem.module.css';

const MenuItem = ({ title, price, tags }) => (
  <li className={styles.menuItem}>
    <div className={styles.head}>
      <div className={styles.name}>
        <p className="p__cormorant" style={{ color: '#dcca87' }}>
          {title}
        </p>
      </div>

      <div className={styles.separator} />

      <div className={styles.price}>
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className={styles.tags}>
      <p className="p__opensans" style={{ color: '#aaa' }}>
        {tags}
      </p>
    </div>
  </li>
);

export default MenuItem;
