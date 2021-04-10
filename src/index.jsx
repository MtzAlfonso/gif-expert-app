import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './GifExpertApp';

import './styles/index.css';
import 'animate.css'
import { Footer } from './components/Footer';

ReactDOM.render(
  <>
    <GifExpertApp />
    <Footer />
  </>,
  document.getElementById('root')
);

