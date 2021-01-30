import React from 'react';
import ReactDOM from 'react-dom';

const d = new Date().toLocaleDateString();
const a = new Date().toLocaleTimeString();


ReactDOM.render(
  [
  <h1>Currant time and date</h1>,
  <p>currunt date is: {d} </p>,
  <p>currunt time is: {a} </p>,

  ]
  ,
  document.getElementById('root')
);

