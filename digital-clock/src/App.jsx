import React, {useState} from 'react';

const App =() => {
    let time = "";
  const [state, setstate] = useState(time);
   const Updatetime = () =>{
    time = new Date().toLocaleTimeString();
    setstate(time);
}
setInterval(Updatetime,1000);
  return (
    <>
     <h1 className="h11">{state}</h1>
     </>
  );
}

export default App;
