/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import styles from './Gallery.module.css';

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <section className={`${styles.gallery} flex__center`}>
      <div className={styles.content}>
        <SubHeading title="Instagram" />
        <h2 className="headtext__cormorant">Photo Gallery</h2>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className={styles.img_gallery}>
        <div className={styles.img_container} ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className={`${styles.card} flex__center`} key={index}>
              <img src={image} alt="Gallery" />
              <BsInstagram className={styles.img_icon} />
            </div>
          ))}
        </div>
        <div className={styles.arrows}>
          <BsArrowLeftShort
            className={styles.arrow}
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className={styles.arrow}
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
