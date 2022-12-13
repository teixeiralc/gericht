import React from 'react';

import styles from './Hero.module.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const Hero = () => (
  <section className={`${styles.hero} app__wrapper section__padding`} id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavor" />
      <h1 className={styles.title}>
        The Key To
        <br /> Fine Dining
      </h1>
      <p className={styles.info_desc}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{' '}
      </p>
      <button className="custom__button" type="button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="hero img" />
    </div>
  </section>
);

export default Hero;
