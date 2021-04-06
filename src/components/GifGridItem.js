import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div>
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
    </div>
  );
};
