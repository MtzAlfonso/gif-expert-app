import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // Hook para modificar el estado
  const [categories, setCategories] = useState(['Dragon Ball']);

  // Función para manipular el estado
  /* const handleAdd = () => {
    setCategories((categories) => [...categories, 'Digimon']);
  }; */

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
