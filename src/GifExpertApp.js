import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  // Hook para modificar el estado
  const [categories, setCategories] = useState([
    'One Punch',
    'Sakura',
    'Dragon Ball',
  ]);

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
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};
