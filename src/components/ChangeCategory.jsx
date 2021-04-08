import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ChangeCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      //? El hook contiene una referencia al estado anterior,
      //? por lo que no es necesario recibir las categorias como parametro
      setCategory(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g. Digimon"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

ChangeCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
