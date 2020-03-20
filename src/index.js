import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from "./router/AppRouter"
import Footer from "./components/Footer"
ReactDOM.render(<AppRouter/>, document.getElementById('root'));
ReactDOM.render(<Footer/>, document.getElementById('footer'))
serviceWorker.unregister();
