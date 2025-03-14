import React from 'react';

function Education() {
    return ( 
        <div className="container m-5 px-5">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <img src="Media/images/education.svg" style={{width:"70%"}}/>
            </div>
           
            <div className="col-lg-6 col-sm-12 mt-2">
            <h1 className="mb-3 fs-2">Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href='' style={{textDecoration:"none"}}>varsity <i className="fa-solid fa-arrow-right-long"></i></a>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href='' style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                
            </div>
        </div>
    </div> 
);
}

export default Education;