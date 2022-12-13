/* eslint-disable react/no-array-index-key */
import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import styles from './SpecialMenu.module.css';

const SpecialMenu = () => {
  return (
    <section
      className={`${styles.specialMenu} section__padding flex__center`}
      id="menu"
    >
      <div className={styles.title}>
        <SubHeading title="Menu that fits you palatte" />
        <h2 className="headtext__cormorant">Today’s Special</h2>
      </div>

      <div className={styles.menu}>
        <div className={`${styles.beverages} flex__center`}>
          <p className={styles.menu_heading}>Wine & Beer</p>
          <ul className={styles.menu_items}>
            {data.wines.map((wine, i) => (
              <MenuItem
                key={wine.title + i}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </ul>
        </div>
        <div className={styles.menu_img}>
          <img src={images.menu} alt="Cocktail" />
        </div>
        <div className={`${styles.cocktails} flex__center`}>
          <p className={styles.menu_heading}>Cocktails</p>
          <ul className={styles.menu_items}>
            {data.cocktails.map((cocktail, i) => (
              <MenuItem
                key={cocktail.title + i}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </ul>
        </div>
      </div>

      <div>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </section>
  );
};

export default SpecialMenu;
