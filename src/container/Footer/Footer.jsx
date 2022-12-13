/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} section__padding `}>
      <FooterOverlay />
      <Newsletter />

      <div className={styles.footer_links}>
        <div className={styles.contact}>
          <h4 className={styles.headtext}>Contact Us</h4>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className={styles.logo}>
          <img src={images.gericht} alt="Logo" />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: '1rem' }}
          />
          <div className={styles.sm_icons}>
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className={styles.work}>
          <h4 className={styles.headtext}>Working Hours</h4>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
