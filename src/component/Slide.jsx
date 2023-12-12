import React from 'react';

const Slide = ({ image, isActive }) => {
  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      <img src={image} alt="Slide" />
    </div>
  );
};

export default Slide;
