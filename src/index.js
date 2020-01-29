import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./components/store";
import * as serviceWorker from './serviceWorker';


import App from './components/App';

import './scss/main.scss';

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register()
