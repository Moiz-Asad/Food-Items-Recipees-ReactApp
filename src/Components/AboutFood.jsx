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
        <><div className="container-fluid row">
        <div className="col-md-4">
            <div className="profile-img">
                <img className="mb-5" src={D.imageURL} alt="Food Recipee"/> 
            </div>
        </div>
        <div className="col-md-6">
            <div className="profile-head">
                        <h2>
                            {D.name}
                        </h2>
                        <h6>
                            Total Ingredients : {D.ingredients.length}
                        </h6>
                        <p className="proile-rating">Time to Cook : <span>{n} minutes</span></p>
            </div>

        </div>
    </div>
    <div className="container-fluid row">
        <div className="col-md-12 mt-5">
            <h1 className="hotbar logo">Ingredients</h1>
        </div>
        <div className="col-md-12 mb-5">
            <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">                      
                <table className="table table-sm table-dark">
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
                <div className="col-md-12 mt-5">
                <h1 className="hotbar logo">Steps used to Cook</h1>
                </div>

                <div className="col-md-8">
                <div className="profile-work">
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
