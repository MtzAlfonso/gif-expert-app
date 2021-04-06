import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loader } from './Loader';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3>Category: <i className="text-thin">{category}</i></h3>
          <div className="card-grid">
            {images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
