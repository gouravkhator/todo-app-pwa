import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
