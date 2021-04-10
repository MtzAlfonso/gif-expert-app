import React from 'react';
import '../styles/Loader.css';

export const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  );
};
