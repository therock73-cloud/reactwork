import React from 'react';
import Reactdom from 'react-dom';
import "./index.css"

const hedding = {};


let cd = new Date();
cd = cd.getHours();
let greting = "";

if(cd >=1 && cd < 12)
{
  greting="Good Morning Sir...";
  hedding.color='green';
  hedding.textAlign='center'
}
else if(cd >= 12 && cd <19)
{
  greting="Good AfterNoon Sir...";
  hedding.color='orange';
  hedding.textAlign='center'


}
else{
 greting="Good Night sir...";
 hedding.color='black';
 hedding.textAlign='center'


}
Reactdom.render(
  <>
  <div >
  
  <h1>Hellow ,<span style={hedding}>{greting}</span></h1>
 
  </div>
  </>,
 document.getElementById('root')
)

