import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center p-5 border-bottom '>
            <h3 className='fs-1 p-3'>Zerodha Products</h3>
            <h4 className='text-muted'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='p-3'>Check out our <a href='https://fullstackstockdashboard.onrender.com'   style={{textDecoration:"none"}}>investment offerings <i className="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
     );
}

export default Hero;