import React from 'react';


function App(){
  const purple ="#8e44ad";
  const [bg, setbg] = useState(purple);


   const bgchange = () =>{
   
   }
  return(
    <div style={{backgroundColor:bg}}>
    <button onClick={bgchange} >click me</button>
    </div>
  )
}
export default App;