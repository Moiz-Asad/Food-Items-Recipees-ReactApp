import React,{useState} from 'react'
import Headlogo from './Headlogo';
import FoodDisplayCard from './FoodDisplayCard';
function FoodItems() {
    const Data = require("./Database/Recipee.json");
    const [search, setsearch] = useState("");
    const [state, setstate] = useState("");
    const SearchItem=(event)=>{
        setsearch(event.target.value)
    }
    const SearchBarDisplay = ()=>{
        setstate("searchstate");
    }
    if(state == "searchstate")
    {
        return (<div className="container-fluid" className="filled">
        <Headlogo/>
        <div className="form-outline">
        
            <input type="search" className="form-control" value={search} onChange={SearchItem} placeholder="Search Food" autoFocus="true" aria-label="Search" />
        </div>
                
                <div className="row">
                {Data.map((dt)=>{
                    var s1 = dt.name.toLowerCase();
                    var s2 = search.toLowerCase();
                    if(s1.includes(s2))
                    {
                        return (<FoodDisplayCard key={dt.fid} fname={dt.name} url={dt.imageURL}/>);
                    }
                })}
                </div>

        </div>
        )
    }
    else
    {
        return (
            
            <div className="container-fluid" className="filled">
            <Headlogo/>
            <button className="btn btn-light" onClick={SearchBarDisplay}>🔍</button>
            
            <div className="row">
                {Data.map((dt)=>{
                return (
                    <FoodDisplayCard key={dt.fid} fname={dt.name} url={dt.imageURL}/>);
                })}
            </div>
            </div>
        )    
    }
}

export default FoodItems
