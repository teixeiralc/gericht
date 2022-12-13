import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import MenuLinks from './MenuLinks';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <nav>
      <div className={styles.logo}>
        <a href="#home">
          <img src={images.gericht} alt="Gericht Logo" />
        </a>
      </div>
      <ul className={`${styles.desktop_links} p__opensans`}>
        <MenuLinks />
      </ul>
      <div className={styles.login}>
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="#book" className="p__opensans">
          Book a Table
        </a>
      </div>
      <div className={styles.mobile}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setMobile(true)}
          className={styles.overlay_open}
        />
        {mobile && (
          <div className={`${styles.mobile_overlay} flex__center slide-bottom`}>
            <MdOutlineRestaurantMenu
              fontSize={27}
              className={styles.overlay_close}
              onClick={() => setMobile(false)}
            />
            <ul className={styles.mobile_links}>
              <MenuLinks />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
