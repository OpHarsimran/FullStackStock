import React from 'react';

function LeftSection({imageUrl, title,desc,demoUrl, learnUrl,googleUrl,appUrl}) {
    return (
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-md-7'>
              <img src={imageUrl} style={{width:"558px", display:"flex", margin:"0 auto"}} alt="image" />
            </div>
          
            <div className='col-md-4'>
              <h2 className='fs-1 my-4 letter-spacing-3'>{title}</h2>
              <p className='text-muted' style={{fontSize:"16px", lineHeight:"1.8"}}>{desc}</p>
              <div className='my-4'>
              <a className='me-5 pe-5' href={demoUrl} target="_blank" style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
              <a href={learnUrl} target="_blank" style={{textDecoration:"none"}}>learn More <i className="fa-solid fa-arrow-right-long"></i></a>
              </div>
              <div className='mt-3'>
                <a href={googleUrl} className='pe-4' target="_blank"><img src='Media/images/googlePlayBadge.svg'/></a>
                <a href={appUrl} target="_blank"><img src='Media/images/appstoreBadge.svg'/></a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default LeftSection;