import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import withClearCache from "./components/clear-cache-component/clear-cache-component";
import './index.css';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const AppNoCacheOnProdPush = withClearCache(App);

ReactDOM.render(
  <React.StrictMode>
    {/* {isAppInDevMode() ? `Build date: ${getBuildDate(buildDate)}` : null} */}
    {/* <AppNoCacheOnProdPush /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();