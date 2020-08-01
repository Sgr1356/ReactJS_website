import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const name="Sagar Yadav";
const currdate= new Date().toLocaleDateString();
const currtime= new Date().toLocaleTimeString();
const img1= "https://picsum.photos/200/300"
const img2= "https://picsum.photos/250/300"
const img3= "https://picsum.photos/300/300"
const img4= "https://picsum.photos/350/300"
const links= "https://github.com/Sgr1356"

ReactDOM.render(
<>
  {/* contentEditable="true"  is a JSX attribute like as html attribute*/ }

  <h1 contentEditable="true" className="heading">Hello my Name is : {name}</h1>
  <h1 className="heading">Today's Date is : {currdate}</h1>
  <h1 className="heading">Current Time is : {currtime}</h1>
  <div className="img-div">
      {/* <img /> is a self closing tag */}
      <img src={img1} alt="Random Images"/>
      <img src={img2} alt="Random Images"/>
      <img src={img3} alt="Random Images"/>
      <a href={links} target="_newtab">
        <img src={img4} alt="Random Images"/>
      </a>
  </div>
</>,
document.getElementById('root')
);