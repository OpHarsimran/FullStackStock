import React from 'react';

function RightSection({imageUrl, title,desc, learnUrl}) {
    return ( 
        <div className='container my-5'>
          <div className='row m-5'>
                      
            <div className='col-md-5 p-5 my-5'>
              <h2 className='fs-1 my-4 letter-spacing-3'>{title}</h2>
              <p className='text-muted' style={{fontSize:"16px", lineHeight:"1.8"}}>{desc}</p>
              <div className='my-4'>
              
              <a href={learnUrl} target="_blank" style={{textDecoration:"none"}}>learn More <i className="fa-solid fa-arrow-right-long"></i></a>
              </div>
              
            </div>
            <div className='col-md-7'>
              <img src={imageUrl} style={{width:"618px", display:"flex", margin:"0 auto"}} alt="image" />
            </div>
          </div>
        </div>
     );
}

export default RightSection;