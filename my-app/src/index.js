import React from 'react';
import ReactDom from 'react-dom';


// render function only takes one jsx element

ReactDom.render(
  //first method 
  //using <div> tag
  //second method of using multipal jsx eleiments in render function by usng array
[
<h1>hellow from saurabh upadhyay to react</h1>,
<p>now i have lern to render multipal jsx eleiment by using div tag!! </p>,
<h2>now you can use any number of jsx eliments </h2>,
],

  document.getElementById('root')
  );

  