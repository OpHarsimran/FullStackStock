import React from 'react';

function Pricing() {
    return ( 
        <div className="container px-5">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <h1 className="mb-5">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-lg-1 col-sm-0">                    
                </div>
                <div className="col-lg-6 col-sm-12 mt-2">
                    <div className="row text-center">
                    <div className="col p-3 border">
                            <h1 className="mb-2">₹0</h1>
                            <p>Modern platforms and apps, ₹0 investments</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className="mb-2">₹20</h1>
                            <p>flat ₹20 intraday and F&O trades.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Pricing;