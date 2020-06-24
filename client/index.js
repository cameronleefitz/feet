import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Webpack from '../webpack.config';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render(<App />, document.getElementById('root'));
