import React, { Fragment } from "react";
function Navbar() {
  return (
    <Fragment>
      <div className="row bg-dark fixed-top text-white pb-2">
        <div className="col-lg-3 mt-3">
          <h4 className="text-center fw-bold">Exclusive</h4>
        </div>
        <div className="col-lg-5 mt-3">
          <div className="d-flex flex-row mt-1">
            <h6 className="text-start me-5 fw-light">Home</h6>
            <h6 className="text-start me-5 fw-light">Contact</h6>
            <h6 className="text-start me-5 fw-light">About</h6>
            <h6 className="text-start me-5 fw-light">Sign Up</h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
