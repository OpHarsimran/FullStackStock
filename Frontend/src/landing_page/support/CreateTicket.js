import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-5'>
            <h1 className='text-muted fs-4 pb-3'> To create a ticket, select a relevant topic</h1>
            <div className="row">
            <div className="col-md-4 my-4">
                <h3 className='fs-5 py-4'><i className="fa-solid fa-plus"></i> Account Opening</h3>
                <ul className='' style={{lineHeight:"2.5",textDecoration:'none'}}>
                <li><a style={{textDecoration:'none'}} href=''>Getting started</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Online</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Offline</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Charges</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Company, Partnership and HUF</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Non Resident Indian (NRI)</a></li>
                </ul>
            </div>
            <div className="col-md-4 my-4">
            <h3 className='fs-5 py-4'><i className="fa-regular fa-user"></i> Your Zerodha Account</h3>
                <ul className='' style={{lineHeight:"2.5",textDecoration:'none'}}>
                <li><a style={{textDecoration:'none'}} href=''>Login credentials</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Your Profile</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Account modification and segment addition</a></li>
                <li><a style={{textDecoration:'none'}} href=''>CMR & DP ID</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Nomination</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Transfer and conversion of shares</a></li>
                </ul>
            </div>
            <div className="col-md-4 my-4"><h3 className='fs-5 py-4'> <i className="fa-solid fa-ellipsis-vertical"></i> Trading and Markets</h3>
                <ul className='' style={{lineHeight:"2.5",textDecoration:'none'}}>
                <li><a style={{textDecoration:'none'}} href=''>Trading FAQs</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Kite</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Margins</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Product and order types</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Corporate actions</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Kite features</a></li>
                </ul>
                </div>
                <div className="col-md-4 my-5">
                <h3 className='fs-5 py-4'><i className="fa-brands fa-ussunnah"></i> Funds</h3>
                <ul className='' style={{lineHeight:"2.5",textDecoration:'none'}}>
                <li><a style={{textDecoration:'none'}} href=''>Fund withdrawal</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Adding funds</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Adding bank accounts</a></li>
                <li><a style={{textDecoration:'none'}} href=''>eMandates</a></li>
                </ul>
            </div>
            <div className="col-md-4 my-5">
            <h3 className='fs-5 py-4'><i className="fa-solid fa-terminal"></i> Console</h3>
                <ul className='' style={{lineHeight:"2.5",textDecoration:'none'}}>
                <li><a style={{textDecoration:'none'}} href=''>IPO</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Portfolio</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Funds statement</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Profile</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Reports</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Referral program</a></li>
                </ul>
            </div>
            <div className="col-md-4 my-5"><h3 className='fs-5 py-4'><i className="fa-brands fa-bitcoin"></i> Coin</h3>
                <ul className='' style={{lineHeight:"2.5",textDecoration:'none'}}>
                <li><a style={{textDecoration:'none'}} href=''>Understanding mutual funds and Coin</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Coin app</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Coin web</a></li>
                <li><a style={{textDecoration:'none'}} href=''>Transactions and reports</a></li>
                <li><a style={{textDecoration:'none'}} href=''>National Pension Scheme (NPS)</a></li>
                </ul>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;