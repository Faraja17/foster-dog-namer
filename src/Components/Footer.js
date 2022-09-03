import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer' id='footer'>

                <span className='connect'>
                    <a className="connect" href="https://www.soocial.com/dog-instagram-names/" >Instagram</a>

                </span>

                <span className='connect'>
                    <a className="connect" href="https://www.tiktok.com/tag/dognames?lang=en" >TikTok</a>

                </span>

                <span className='connect'>
                    <a className="connect" href="https://www.youtube.com/results?search_query=Letting+Homeless+Puppies+Pick+Their+Name" >YouTube</a>

                </span>


                <p className="copyright"> &copy; {new Date().getUTCFullYear()} Faraja Thompson</p>
            </div>
        </>

    )
};

export default Footer;