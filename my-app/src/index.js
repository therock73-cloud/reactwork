import React from 'react';
import ReactDom from 'react-dom';


// render function only takes one jsx element
const fname = "saurabh upadhyay";   // use this vaiable in jsx it can be done by curly breces



ReactDom.render(
  //first method 
  //using <div> tag
  //second method of using multipal jsx eleiments in render function by usng array
<>
<h1>hellow from saurabh upadhyay to react</h1>
<p>now i have lern to render multipal jsx eleiment by using div tag!! </p>
<h2>now you can use any number of jsx eliments </h2>
<h3>my name is {fname}</h3> 
<p>refresh for rendom number = {Math.random()}</p>
</>,
// React.Fragment is used for remove axtra div  which is create becouse of div tag 
//we can also use <> jsx eliments </> in placeof <div> or array 

  document.getElementById('root')
  );

  