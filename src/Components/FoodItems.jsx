import React,{useState} from 'react'
import Headlogo from './Headlogo';
import FoodDisplayCard from './FoodDisplayCard';
import './FoodDisplayCard.css';
import AboutFood from './AboutFood';

function FoodItems() {
    const Data = require("./Database/Recipee.json");
    const [search, setsearch] = useState("");
    const [state, setstate] = useState("mainstate");
    const SearchItem=(event)=>{
        setsearch(event.target.value)
    }
    const SearchBarDisplay = ()=>{
        setstate("searchstate");
    }
    if(state === "searchstate")
    {
        return (<div className="container-fluid" className="filled">
        <Headlogo/>
        <div className="form-outline">
        
            <input type="search" className="form-control" value={search} onChange={SearchItem} placeholder=" 🔍 Search Food" autoFocus={true} aria-label="Search" />
        </div>
                
                <div className="row">
                {Data.map((dt)=>{
                    var s1 = dt.name.toLowerCase();
                    var s2 = search.toLowerCase();
                    if(s1.includes(s2))
                    {
                        return (
                        <div className="movement" className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                    <FoodDisplayCard key={dt.fid} fname={dt.name} url={dt.imageURL}/>
                                    <div className="card">
                                    <button className="btn btn-primary" value={dt.fid} onClick={()=>{
                                        setstate(dt.fid);
                                    }}>More Info</button></div>
                            
                        </div>);
                    }
                })}
                </div>

        </div>
        )
    }
    else
    if(state === "mainstate")
    {
        return (
            
            <div className="container-fluid" className="filled">
            <Headlogo/>
            <button className="btn btn-light" onClick={SearchBarDisplay}>🔍</button>
            
            <div className="row">
                {Data.map((dt)=>{
                return (
                    <div className="movement" className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                    <FoodDisplayCard key={dt.fid} fname={dt.name} url={dt.imageURL}/>
                                    <div className="card">
                                    <button className="btn btn-primary" value={dt.fid} onClick={()=>{
                                        setstate(dt.fid);
                                    }}>More Info</button></div>
                            
                    </div>);
                })}
            </div>
            </div>
        )    

    }
    else
    {
        return (<div className="container-fluid" className="filled">
        <Headlogo/>
        <div className="container-fluid">
            <button onClick={()=>{
                setstate("mainstate");
            }}>Back</button>
        </div>
        <div className="container-fluid">
            <AboutFood id={state}/>
        </div>
        </div>
        )
    }
}

export default FoodItems
