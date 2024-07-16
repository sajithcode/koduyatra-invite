// Preloader.js
import React from 'react';
import preloaderImage from './Assets/preloader.gif'; // Replace with your preloader image path

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloaderImage} alt="Loading..." />
    </div>
  );
}

export default Preloader;
