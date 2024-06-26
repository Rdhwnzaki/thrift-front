import React, { Component } from "react";
import "../../style/auth.css"; // Import the CSS file
export default class SignUp extends Component {
  render() {
    return (
      <form>
        {" "}
        <div className="navbar-light" style={{ height: "643px" }}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h3>Register</h3>{" "}
              <div className="mb-3">
                {" "}
                <label>First name </label>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />{" "}
              </div>{" "}
              <div className="mb-3">
                {" "}
                <label>Number phone</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />{" "}
              </div>{" "}
              <div className="mb-3">
                {" "}
                <label>Email address</label>{" "}
                <input
                  type="email "
                  className="form-control"
                  placeholder=" Enter email"
                />{" "}
              </div>{" "}
              <div className="mb-3">
                {" "}
                <label>Password</label>{" "}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />{" "}
              </div>{" "}
              <div className="d-grid">
                {" "}
                <button type="submit" className="btn btn-success">
                  {" "}
                  Register{" "}
                </button>{" "}
              </div>{" "}
              <p className="forgot-password text-right">
                {" "}
                Already registered <a href="/sign-in">sign in?</a>{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </form>
    );
  }
}
