import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavouritesContextProvider } from './components/store/favorites-context';

ReactDOM.render(
  <FavouritesContextProvider>
  <BrowserRouter>
    <App />  
  </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById('root')
);
