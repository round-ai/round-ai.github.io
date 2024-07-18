import React, { useState } from 'react';
import './MedImg.css';
import CheckIcon from '@mui/icons-material/Check';

function MedImg({ imgSrc, title, caption, category, selected, onClick }) {
  // Remove the internal state management for clicked as it is now managed by the parent component
  return (
    <div className={`medImgContainer ${selected ? 'active' : ''}`} onClick={onClick}>
      <img src={process.env.PUBLIC_URL + imgSrc} alt="Medical" />
      <div className="medImgContainer__text">
        <div className="medImgContainer__title">
          <p>{title}</p>
        </div>
        <div className="medImgContainer__caption">
          <p>{caption}</p>
        </div>
        <div className="medImgContainer__category">
          {category.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      {selected && (
        <div className="medImgContainer__check">
            <CheckIcon className="medImgContainer__check__Icon" style={{ fontSize: '80px' }} />
        </div>
      )}
    </div>
  );
}

export default MedImg;
