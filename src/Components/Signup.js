import React from 'react';

const Signup = () => {


// 7f0aa8ef30
    
    return (
       <>
            <div id="signup">
                <form action="/signup" className="form-signin" method="POST">
                    <a href="https://dog-namer-app.herokuapp.com/"><img className="mb-4 dog-print" src="https://cdn.pixabay.com/photo/2012/04/18/00/06/print-36174_960_720.png" alt="" width="72" height="57" />
                    </a>
                    <h1 className="h3 mb-3 fw-normal newsletter">Sign up for our newsletter!</h1>
                    <a className="w-100 btn btn-lg btn-primary" href="https://dog-namer-app.herokuapp.com/" role="button">Subscribe</a>
                    
                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2022 Foster Dog Namer</p> */}
                </form>
            </div>
            
        </>
)};

export default Signup;