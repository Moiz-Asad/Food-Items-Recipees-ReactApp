import React from 'react'
import './FoodDisplayCard.css';
function FoodDisplayCard(prop) {
    return (
        <div className="movement" className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card">
            <img src={prop.url} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">{prop.fname}</h5>
            <button className="btn btn-primary" value={prop.id}>More Info</button>
            </div>
            </div>
        </div>
    )
}

export default FoodDisplayCard
