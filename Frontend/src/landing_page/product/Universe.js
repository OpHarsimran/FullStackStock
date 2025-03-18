import React from 'react';

function Universe() {
    return ( 
        <div className='container my-5'>
          <div className='row m-5'>                     
            
              <h2 className=' text-center fs-1 my-4 letter-spacing-3'>The Zerodha Universe</h2>
              <p className='text-center text-muted mb-5' style={{fontSize:"16px", lineHeight:"1.8"}}>Extend your trading and investment experience even further with our partner platform</p>
              <div className='col-md-4 p-5'>
              <img src="Media/images/zerodhaFundhouse.png" style={{width:"190px", height:"40px", marginBottom:'16px'}} alt="image" />
              <p className='fs-6 text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              
            </div>
            <div className='col-md-4 p-5'>
              <img src="Media/images/sensibullLogo.svg" style={{width:"150px", height:"40px", marginBottom:'16px'}} alt="image" />
              <p className='fs-6 text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              
            </div>
            <div className='col-md-4 p-5'>
              <img src="Media/images/dittoLogo.png" style={{width:"150px", height:"40px", marginBottom:'16px'}} alt="image" />
              <p className='fs-6 text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              
            </div>

            <div className='col-md-4 p-5'>
              <img src="Media/images/smallcaseLogo.png" style={{width:"150px", height:"40px", marginBottom:'16px'}} alt="image" />
              <p className='fs-6 text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              
            </div>
            <div className='col-md-4 p-5'>
              <img src="Media/images/streakLogo.png" style={{width:"150px", height:"40px", marginBottom:'16px'}} alt="image" />
              <p className='fs-6 text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              
            </div>
            <div className='col-md-4 p-5'>
              <img src="Media/images/zerodhaFundhouse.png" style={{width:"150px", height:"40px", marginBottom:'16px'}} alt="image" />
              <p className='text-muted fs-6'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              
            </div>
            <a href='https://fullstackstockdashboard.onrender.com'  ><button className="btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Start Now</button></a>
          </div>
        </div>
     );
}

export default Universe;