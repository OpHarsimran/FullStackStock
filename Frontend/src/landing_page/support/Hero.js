import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className="p-5" id='supportWrappercont'>
                <h3 className="mb-0">Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-5'>
                <div className='col-md-6 px-5'>
                    <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket                  
                    </h1>
                    <input className='mb-4' placeholder='Eg:how do i activate F&Q'/><br/>                    
                    <a href='' className='me-4'>Track account opening</a>
                    <a href='' className='me-4'>Track segment activation</a>
                    <a href='' className='me-4'> Intraday margins</a><br/>
                    <a href='' className='me-4'>Kite user manual</a>
                </div>
                <div className='col-md-6'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=''>MCX - Revision in Trading Hours from March 10, 2025</a></li>
                        <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                    
                </div>
            </div>

        </section>
     );
}

export default Hero;