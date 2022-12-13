import React from 'react';
import { images, data } from '../../constants';
import { AwardCard, SubHeading } from '../../components';
import styles from './Laurels.module.css';

const Laurels = () => {
  return (
    <section className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h2 className="headtext__cormorant">Our Laurels</h2>
        <div className={styles.awards}>
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Laurels" />
      </div>
    </section>
  );
};

export default Laurels;
