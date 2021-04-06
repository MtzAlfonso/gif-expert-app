import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loader } from './Loader';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <Loader />}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
