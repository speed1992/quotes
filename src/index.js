import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import withClearCache from "./components/clear-cache-component/clear-cache-component";
import { isAppInDevMode } from './components/row/utils';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { buildDate } from "./static/buildDate.json";
import { getBuildDate } from "./utils/dateUtils";

const AppNoCacheOnProdPush = withClearCache(App);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* {isAppInDevMode() ? `Build date: ${getBuildDate(buildDate)}` : null}
    <AppNoCacheOnProdPush /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();