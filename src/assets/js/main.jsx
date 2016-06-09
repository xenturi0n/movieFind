import React from 'react';
import {render} from 'react-dom';

import appAPI from './flux/appAPI.js';

import App from './components/App.jsx';


render(<App />, document.getElementById('app'));