import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import withClearCache from './components/clear-cache-component/clear-cache-component';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const AppNoCacheOnProdPush = withClearCache(App);

ReactDOM.render(
  <React.StrictMode>
    <AppNoCacheOnProdPush />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();