import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from "./Sdata";
import Card from "./Cards"

// function ncard(val) {
//   return(
//     <Card
//     imgsrc={val.imgsrc}
//     tittle={val.tittle}
//     sname={val.sname}
//     link={val.link}
//   />

//   )

// }


ReactDOM.render(
  <>
  <h1 className="hedings">List of my top three Fevrate Netflix Seriese</h1>
    {Sdata.map(function ncard(val) {
      return(
    <Card
    imgsrc={val.imgsrc}
    tittle={val.tittle}
    sname={val.sname}
    link={val.link}
  />

  )

    })};
  </>
,
  document.getElementById('root')
);

