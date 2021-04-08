import React from 'react';
import { getAnimation } from '../helpers/getAnimation';

export const GifGridItem = ({ title, url }) => {
  return (
    <div className={`card animate__animated ${getAnimation()}`}>
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
    </div>
  );
};
