import React from 'react';
import images from '../../constants/images';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <p className="p__cormorant" style={{ marginBottom: '.25rem' }}>
      {title}
    </p>
    <img src={images.spoon} alt="Spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
