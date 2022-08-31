import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer' id='footer'>
            <Link to="/" className='connect'>
                <span className='connect'>Instagram</span>
            </Link>
            
            <Link to="/" className='connect'>
                <span className='connect'>TikTok</span>
            </Link>
            
            <Link to="/" className='connect'>
                <span className='connect'>YouTube</span>
            </Link>
            
            <p className="copyright">© 2022 Foster Dog Namer</p>
        </div>
        </>

)};

export default Footer;