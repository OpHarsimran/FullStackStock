import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="Media/images/homeHero.png" alt="Hero Image" className="mb-5"></img>
                <h1 className="mt-5">Invest in Stocks</h1>
                <p>Get started with our easy-to-use platform and start investing in stocks today!</p>
                <a href='https://fullstackstockdashboard.onrender.com'  ><button className="btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Start Now</button></a>
            </div>
        </div>
     );
}

export default Hero;