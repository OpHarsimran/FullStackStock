import React from 'react';

function Brokerage() {
    return (
      <div className='container'>
        <h3 className='fs-3 mb-3 '>Charges for account opening</h3>
        <table className="table table-striped table-bordered mb-5" style={{maxWidth:"1100px"}}>
        <thead>
          <tr><th>Type of account</th>
          <th>Charges</th></tr>
        </thead>
        <tbody>
        <tr><td>Online account</td><td><button type="button" className="btn btn-success">Free</button></td></tr>
        <tr><td>Offline account</td><td><button type="button" className="btn btn-success">Free</button></td></tr>
        <tr><td>NRI account (offline only)</td><td>₹ 500</td></tr>
          <tr><td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td><td>₹ 500</td></tr>
         
        </tbody>
      </table>

      <h3 className='fs-3 mb-3 '>Charges for optional value added services</h3>
      <table className="table table-striped table-bordered mb-5" style={{maxWidth:"1100px"}}>
        <thead>
          <tr><th>Service</th>
          <th>Billing Frquency</th><th>Charges</th></tr>
        </thead>
        <tbody>
        <tr><td>Tickertape</td><td>Monthly / Annual</td><td>Free: 0 | Pro: 249/2399</td></tr>
        <tr><td>Smallcase</td><td>Per transaction</td><td>Buy & Invest More: 100 | SIP: 10</td></tr>
        <tr><td>Kite Connect</td><td>Monthly</td><td>Connect: 2000 | Historical: 2000</td></tr>
         
        </tbody>
      </table>

      </div>
      );
}

export default Brokerage;