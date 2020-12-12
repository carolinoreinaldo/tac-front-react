import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './views/navbar';

ReactDOM.render(
  <>
    <Navbar />
    <App />
  </>,
  document.getElementById('root')
);