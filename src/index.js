/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './components/App';

const store = createStore(
  reducer,
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
