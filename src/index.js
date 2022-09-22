import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
    </React.StrictMode>
    , document.getElementById('root'));

serviceWorkerRegistration.unregister();