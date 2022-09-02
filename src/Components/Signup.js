import React from 'react';

const Signup = () => {


// 7f0aa8ef30
    
    return (
       <>
            <div id="signup">
                <form action="/signup" className="form-signin" method="POST">
                    <img className="mb-4 dog-print" src="https://cdn.pixabay.com/photo/2012/04/18/00/06/print-36174_960_720.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal newsletter">Sign up for our newsletter!</h1>
    
                    <input type="text" name="fName" className="form-control top" placeholder="First Name" required autofocus />
                    <input type="text" name="lName" className="form-control middle" placeholder="Last Name" required />
                    <input type="email" name="email" className="form-control bottom" placeholder="Email" required />
        
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2022 Foster Dog Namer</p> */}
                </form>
            </div>
            
        </>
)};

export default Signup;