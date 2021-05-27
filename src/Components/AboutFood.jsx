import React from 'react'
function AboutFood(prop) {
    const Data = require('./Database/Recipee.json');
    const D = Data[prop.id];
    let n=0;
    let m=0;
    D.timers.map((e)=>{
        n=n+e;
    })
    
    return (
        <><div class="row">
        <div class="col-md-4">
            <div class="profile-img">
                <img src={D.imageURL} alt="Food Recipee"/> 
            </div>
        </div>
        <div class="col-md-6">
            <div class="profile-head">
                        <h5>
                            {D.name}
                        </h5>
                        <h6>
                            Total Ingredients : {D.ingredients.length}
                        </h6>
                        <p class="proile-rating">Time to Cook : <span>{n} minutes</span></p>
            </div>

        </div>
        <div class="col-md-2">
            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 mt-5">
            <h1 className="hotbar">INGREDIENTS</h1>
        </div>
        <div class="col-md-12 mb-5">
            <div class="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">                      
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {D.ingredients.map((T)=>{
                            m=m+1;
                            return(
                                <tr><th scope="row">{m}</th>
                                <td>{T.name}</td>
                                <td>{T.quantity}</td>
                                <td>{T.type}</td></tr>)    

                        })}
                    </tbody>
                    </table>
                
                </div>
                <div class="col-md-12 mt-5">
                <h1 className="hotbar">STEPS TO COOK</h1>
                </div>

                <div class="col-md-8">
                <div class="profile-work">
                <ol>
                {D.steps.map((e)=>{
                    return (<li><b>{e}</b></li>);
                })}
                </ol>
                
                </div>
                </div>
            </div>
        </div>
    </div></>
    )
}

export default AboutFood
