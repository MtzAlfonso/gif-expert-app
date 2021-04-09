import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { Loader } from './Loader';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (images.length !== 0 ? <>
        <h3>Category: <i className="text-thin">{category}</i></h3>
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      </> : <p>Images not found 😢</p>)}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}