import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currDate= new Date();
currDate=currDate.getHours();
let gretting='';
let cssStyle={
 };

if (currDate >=1 && currDate <12){
  gretting='Good Morning'
  cssStyle.color = 'red';
}else if(currDate>=12 && currDate <19){
  gretting='Good Afternoon'
  cssStyle.color = 'green';
}else{
  gretting='Good Night'
  cssStyle.color ='blue'
}


ReactDOM.render(
  <>
  <div>
    <h1 >Hello sagar Yadav , <span style={cssStyle}>{gretting}</span></h1>
  </div>
  </>,
  document.getElementById('root')
);

