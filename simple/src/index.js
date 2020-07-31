import React from 'react';
import ReactDOM from 'react-dom';

// to write javascript inside jsx element 
// this is called java script expression {Name}

// const Name="Netflix picks";


// ReactDOM.render(
// <>
//     <h1>{Name}</h1>
//     <p>List of my Top 5 Series</p>
//     <ol>
//       <li>Dark</li>
//       <li>Lost</li>
//       <li>Money Heist</li>
//       <li>Mr Robot</li>
//       <li>Cursed</li>
    
//     </ol>
// </>,
//   document.getElementById('root')
// );



// this is method of template literals    EX:-   {` ${} ${} ${}  `}
const Name="Netflix picks";
const ap="Series";

ReactDOM.render(
<>
    <h1>{`${Name} ${ap}`}</h1>
    <p>List of my <b>Top 5 Series</b></p>
    <ol>
      <li>Dark</li>
      <li>Lost</li>
      <li>Money Heist</li>
      <li>Mr Robot</li>
      <li>Cursed</li>
    
    </ol>
</>,
  document.getElementById('root')
);