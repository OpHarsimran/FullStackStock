import React from 'react';

function Team() {
    return ( 
        <div className="container">

        <div className="row mt-5 mb-5 border-top">
          <h1 className=" fs-2 text-center pt-5">People
          </h1>
        </div>
        <div className="row mb-5 text-muted" style={{lineHeight:'1.8', fontSize:'1.1em'}}>
          <div className='col-lg-6 col-sm-12 text-center'>
            <img src='Media/images/nithinKamath.jpg' className='' style={{borderRadius:'100%', width:'40%'}}></img>
            <h4 className='mt-4'>Nithin kamath</h4>
            <h6>Founder, CEO</h6>
          </div>

          <div className='col-lg-6 col-sm-12 '>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC)..</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
          </div>
        </div>
      </div>
     );
}

export default Team;