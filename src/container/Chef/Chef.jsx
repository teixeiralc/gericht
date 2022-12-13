import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import styles from './Chef.module.css';

const Chef = () => {
  return (
    <section
      className={`${styles.section} section__padding app__bg app__wrapper`}
    >
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h2 className="headtext__cormorant">What We Believe In</h2>
        <div className={styles.chef_content}>
          <div className={styles.quote}>
            <img src={images.quote} alt="Quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>

        <div className={styles.chef_sign}>
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Chef's Signature" />
        </div>
      </div>
    </section>
  );
};

export default Chef;
