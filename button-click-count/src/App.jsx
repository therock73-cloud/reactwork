import React, {useState} from 'react';
const App = () =>{
    const [count,setCount] = useState(3);
    const IN = () =>{
        setCount(count +1);
    };
    return(
    <>
    <div  className="h11">
    <h1>{count}</h1>
    <button className="button" onClick={IN}>Click Me</button>
    </div>
    </>
    )
}
export default App;