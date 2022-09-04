import React from 'react';

const Failure = () => {
    return(
        <div>
            div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Uh oh!</h1>
          <p className="col-md-8 fs-4">There was a problem signing you up. Please try again or contact the developer.</p>
          
          <form action="/failure" method="post">
            <button className="btn btn-primary btn-lg" type="submit" name="button">Try Again</button>
          </form>
        </div>
      </div>
    );
};

export default Failure;