import React from 'react';

const Navbar = () => {
    return(
        <div>
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/home"><img className="navLogo" src="https://cdn.pixabay.com/photo/2013/07/12/15/02/dog-149300_960_720.png" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                    
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                    
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Connect</a>
                        </li>

                    </ul>
                </div>
                </nav>
            </div>
        </div> 
    );
};

export default Navbar;