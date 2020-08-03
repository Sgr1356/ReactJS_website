import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {add,sub,mul,div} from './Calc';



ReactDOM.render(
  <>
    <ul>
      <li> sum of Two Number is : {add(40,4)}</li>
      <li> sub of Two Number is : {sub(40,4)}</li>
      <li> mul of Two Number is : {mul(40,4)}</li>
      <li> div of Two Number is : {div(40,3)}</li>
    </ul>

  </>,
  document.getElementById('root')
);

