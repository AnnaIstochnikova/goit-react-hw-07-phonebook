import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { store } from 'redux/store';
import { App } from 'components/App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
