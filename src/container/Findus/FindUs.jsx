import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => {
  return (
    <section className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h2 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
          Find Us
        </h2>
        <div className="app__wrapper_content">
          <p className="p__opensans" style={{ color: '#aaa' }}>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p
            className="p__cormorant"
            style={{ color: '#dcca87', margin: '2rem 0' }}
          >
            Opening Hours
          </p>
          <p className="p__opensans" style={{ marginBottom: '.5rem' }}>
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: '2rem' }}
        >
          Visit Us
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="Find us" />
      </div>
    </section>
  );
};

export default FindUs;
