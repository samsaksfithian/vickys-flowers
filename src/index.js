import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import cssVars from 'css-vars-ponyfill';
import App from './components/App';

cssVars({ onlyLegacy: true });

ReactDOM.render(<App />, document.getElementById('root'));
