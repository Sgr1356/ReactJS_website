// var React= require('react'); #it is simple react
// babel is always with react it is a javascript compiler  and it support modern javascript ie ES6 !important
import React from 'react';
// var ReactDOM=require('react-dom'); # simple react dom
import ReactDOM from 'react-dom';




// ReactDOM.render('what to show','where to show','callback function');
// this is JSX method to render data to browser 

// ReactDOM.render(<h1>Hello world</h1>,document.getElementById('root'));   

// javascript extn  <h1>Hello world</h1> inside render method  and import React from 'react' is always used to use JSX

// javascript XML
// JSX


// var h1=document.createElement('h1');
// h1.innerHTML="Hello world";
// document.getElementById("root").appendChild(h1);        #####This is pure Javascript to render data to browser



// in react vs 16.x.x it is possible for render() to return an array of element

// multiple element inside DOM so you have to wrap all JSX in enclosing tag
// method1 :-
// ReactDOM.render(
//     <div>
// <h1>Hello world</h1>
// <p>MY self Sagar Yadav</p></div>,
// document.getElementById('root'));


// by using array of element
// method2 :-
// ReactDOM.render(
// [ 
//     <h1>Hello world</h1>,
//     <p>MY self Sagar Yadav</p>,
//     <h6>thankyou</h6>
// ],
// document.getElementById('root'));


// React.Fragment use it because it doesnot take extra div itslef  ctrl+shift+j
// ReactDOM.render(
//  <React.Fragment>
//     <h1>Hello world</h1>
//     <p>My self Sagar Yadav</p>
// </React.Fragment>,
//     document.getElementById('root')
// );


// this is react components 

import App from './App.jsx'
ReactDOM.render(
    <>
        <App></App>
        <p>Now Your are Precious </p>
       
    </>,
    document.getElementById('root')
);  