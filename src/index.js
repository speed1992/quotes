import React from 'react';
import ReactDOM from 'react-dom';
import { renderAppAccordingToTheEnv } from './common/utils/commonUtils';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const Application = renderAppAccordingToTheEnv();

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();