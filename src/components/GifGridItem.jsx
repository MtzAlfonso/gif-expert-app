import React from 'react';
import { getAnimation } from '../helpers/getAnimation';
import PropTypes from 'prop-types';



export const GifGridItem = ({ title, url }) => {
  return (
    <div className={`card animate__animated ${getAnimation()}`}>
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
