import { useEffect, useState } from 'react';
import { getFetchGifs } from '../helpers/getFetchGifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  //? Este hook nos sirve para llamar una función asincrona una sola vez
  //? y asi evitar llamar la función cada que el estado cambie
  useEffect(() => {
    getFetchGifs(category).then((images) => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
