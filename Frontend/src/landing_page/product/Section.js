import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Section() {
    return ( 
        <>
        <LeftSection imageUrl="Media/images/kite.png" title="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." demoUrl="https://fullstackstockdashboard.onrender.com" learnUrl="https://fullstackstockdashboard.onrender.com" googleUrl="Media/images/appstoreBadge.svg" appUrl="Media/images/appstoreBadge.svg"/>
        <RightSection imageUrl="Media/images/console.png" title="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations" learnUrl="https://fullstackstockdashboard.onrender.com" />
        <LeftSection imageUrl="Media/images/coin.png" title="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." demoUrl="https://fullstackstockdashboard.onrender.com" learnUrl="https://fullstackstockdashboard.onrender.com" googleUrl="Media/images/appstoreBadge.svg" appUrl="Media/images/appstoreBadge.svg"/>
        <RightSection imageUrl="Media/images/kiteconnect.png" title="Kite Connect API" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnUrl="https://fullstackstockdashboard.onrender.com" />
        <p className='text-center' style={{fontSize:"20px",fontWeight:"400"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        </>
     );
}

export default Section;