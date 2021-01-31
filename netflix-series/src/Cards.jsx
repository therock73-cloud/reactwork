import React from 'react';

function Cards(props){
    return (
        
              <div className="cards">
              <div className="card">
               <img src={props.imgsrc} alt="mypic" className="cardimg" />
               <div className="cards-info">
                  <span className="card-category">{props.title}</span>
                  <h3 className="card-tittle">{props.sname}</h3>
                  <a href={props.link} target="blank">
                    <button className="button">Watch Now</button>
                  </a>
               </div>
              </div>
            </div>
          
            );
            
          }
    


export default Cards;