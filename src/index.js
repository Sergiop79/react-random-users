import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Typography from "typography";
import oceanBeachTheme from "typography-theme-ocean-beach";

const typography = new Typography(oceanBeachTheme);
typography.injectStyles();

ReactDOM.render(<App />, document.getElementById('root'));