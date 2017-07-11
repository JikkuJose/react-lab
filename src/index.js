import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import 'tachyons'
import './styles/global.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
