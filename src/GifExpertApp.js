import React, { useState } from 'react';
import { ChangeCategory } from './components/ChangeCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // Hook para modificar el estado
  const [category, setCategory] = useState('Digimon');

  return (
    <div>
      <h2>GifExpertApp</h2>
      <ChangeCategory setCategory={setCategory} />
      <GifGrid key={category} category={category} />
    </div>
  );
};
