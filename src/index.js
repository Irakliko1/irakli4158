import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';
// import { GlobalStateProvider } from './reducers/auth.reducer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 

    <BrowserRouter>
        <Layout/>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();