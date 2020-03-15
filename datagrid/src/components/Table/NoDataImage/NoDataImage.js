import React from 'react';
import './NoDataImage.css';
import image from '../../../image/image.png';

const NoDataImage = () => {
  return <img src={image} className="no-data-image" alt="no-data"/>
}

export default NoDataImage;