import React from 'react';

function Awards() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src="Media/images/largestbroker.svg" alt=""></img>
                </div>
                <div className="col-lg-6 col-sm-12 p-5 mt-3">
                    <h1>Largest Stock Broker</h1>
                    <p className="mb-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Best overall app</p></li>
                                <li><p>Best app for beginners</p></li>
                                <li><p>future option</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Investation at Ease</p></li>
                                <li><p>No fraud</p></li>
                                <li><p>User Friendly</p></li>
                            </ul>
                        </div>
                        <img src="Media/images/pressLogos.png" className="mt-3" style={{width:"90%"}}></img>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Awards;