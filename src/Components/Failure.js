import React from 'react';

const Failure = () => {
    return(
        <div>
            div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Uh oh!</h1>
          <p class="col-md-8 fs-4">There was a problem signing you up. Please try again or contact the developer.</p>
          
          <form action="/failure" method="post">
            <button class="btn btn-primary btn-lg" type="submit" name="button">Try Again</button>
          </form>
        </div>
      </div>
    );
};

export default Failure;