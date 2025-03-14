import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container text-center m-5'>
            <h1>404: Page Not Found</h1>
            <p>Sorry, the page you're looking for does not exist.</p>
            <Link to="/">Back to Home</Link>
        </div>
     );
}

export default NotFound;