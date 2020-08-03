import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App,{website,foc} from './App'


ReactDOM.render(
  <>
  <App></App>
  <ul>
    <li>{website}</li>
    <li>{foc}</li>
  </ul>
  </>,
  document.getElementById('root')
);

