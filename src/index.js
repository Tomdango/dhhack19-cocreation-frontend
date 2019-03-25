// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Router from './presentation/core/Router';
import './scss/Main.scss';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Router />
    </Provider>,
    root
  );
}

// Offline Worker
serviceWorker.register();
