import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  //? Este hook nos sirve para llamar una función asincrona una sola vez
  //? y asi evitar llamar la función cada que el estado cambie
  useEffect(() => {
    getGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${process.env.REACT_APP_GIPHY_APIKEY}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.downsized_medium.url,
    }));

    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
