import React from 'react';

function App(){
    let td = new Date();
 td = td.getHours();
 let greting = "";
 const sty = {};

 if(td > 1 && td < 12)
 {
   greting = "Good Morning Sir...";
   sty.color='green';
}
else if(td > 12 && td < 19)
{
  greting="Good Afternoon Sir...";
  sty.color='orange';
}
else {
  greting="Good Night Sir...";
  sty.color='black';

}

return (
    <>
    <div>
    <h1>Hellow,<span style={sty}>{greting}</span></h1>
    </div>
    </>
)

}
export default App;