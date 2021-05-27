import React from 'react';

function FoodDisplayCard(prop) {
    
    return (

            <div className="card">
            <img src={prop.url} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">{prop.fname}</h5>
            </div>
            </div>
    )
}
export default FoodDisplayCard
