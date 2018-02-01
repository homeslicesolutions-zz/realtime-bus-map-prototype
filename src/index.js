import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/app/app';
import initializeStore from './redux/store';
import './index.css';

const rootEl = document.getElementById('root');
const store  = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootEl
);
