import React from 'react';
import styles from './AboutUs.module.css';
import images from '../../constants/images';

const AboutUs = () => {
  return (
    <section
      id="about"
      className={`${styles.about} app__bg flex__center section__padding`}
    >
      <div className={`${styles.overlay} flex__center`}>
        <img src={images.G} alt="G letter" />
      </div>
      <div className={`${styles.content} flex__center`}>
        <div className={styles.content_about}>
          <h2 className="headtext__cormorant">About Us</h2>
          <img src={images.spoon} alt="Spoon" />
          <p className={styles.about_info}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus eum, nemo temporibus quas a consequuntur voluptate
            voluptatum iusto sed nesciunt dolore! Cumque illo dolores
            consectetur consequatur pariatur itaque dolorem!
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className={styles.knife}>
          <div className="flex__center">
            <img src={images.knife} alt="Knife" />
          </div>
        </div>

        <div className={styles.content_history}>
          <h2 style={{ lineHeight: '1' }} className="headtext__cormorant">
            Our History
          </h2>
          <img src={images.spoon} alt="Spoon" />
          <p className={styles.history_info}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus eum, nemo temporibus quas a consequuntur voluptate
            voluptatum iusto sed nesciunt dolore! Cumque illo dolores
            consectetur consequatur pariatur itaque dolorem!
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
