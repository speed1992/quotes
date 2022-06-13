import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { renderAppAccordingToTheEnv } from './common/utils/commonUtils';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();