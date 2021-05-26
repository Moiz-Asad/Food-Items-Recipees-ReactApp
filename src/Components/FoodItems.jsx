import React from 'react'
import FoodDisplayCard from './FoodDisplayCard';

function FoodItems(prop) {
    const Data = require("./Database/Recipee.json");
    return (
        <div className="container-fluid">
        <div className="row">
            {Data.map((dt)=>{
            return (
                <FoodDisplayCard key={dt.fid} fname={dt.name} url={dt.imageURL}/>);
            })}
        </div>
        </div>
    )
}

export default FoodItems
