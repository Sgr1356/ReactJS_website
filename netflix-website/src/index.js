import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Card from './Card';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Card imgscrc={val.imgscrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  
  )
}

ReactDOM.render(
  <>
    <h1 className="heading_styles">List of top 4 Netflix in 2020</h1>
    
 { Sdata.map(ncard) };

  </>,
  document.getElementById('root')
);

