import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 

    <BrowserRouter>
      <Provider store={store}>
          <Layout/>
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();