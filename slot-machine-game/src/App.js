import React from 'react';


const SlotM =(props) =>{



    let {x,y,z} =props;

    if(x===y && y===z)
    { return (
        <>
        <h1> {x} {y} {z}</h1>
        <h1>Matching</h1>
        </>
    )
    }
    else
    {
        return (
            <>
            <h1> {x} {y} {z}</h1>
            <h1>not Matching</h1>
            </>
        )
    }
}


const App = () =>{
    return (
        <>

        <h1 className="heading_style"> 
        🎰  Wellcome to <span style={{fontWeight:"bold"}}>Slot Machine Game </span> 🎰</h1>
        <div className="slotmachine">
        <SlotM  x="😃" y="😃" z="😃"/>
        <hr/>
        <SlotM  x="😃" y="😓" z="🧑‍🦱"/>
        <hr/>

        <SlotM  x="😃" y="😃" z="😃"/>
        <hr/>

        <SlotM  x="🧝" y="🧝" z="🧝"/>
        <hr/>
        
        </div>


        </>
    );

};

export default App;