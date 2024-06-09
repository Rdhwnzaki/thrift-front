import React, { Component } from "react";
import "../../style/auth.css"; // Import the CSS file
import loginImg from "../../assets/images/p3.jpg";
import { Row, Col } from "reactstrap";
import Navbar from "../../components/Navbar";
export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: "110px", marginBottom: "100px" }}>
          <Row>
            <Col lg={6}>
              <img
                src={loginImg}
                style={{ height: 525, width: "100%" }}
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div style={{ marginTop: "100px", width: "320px" }}>
                <h3 className="text-center">Login</h3>{" "}
                <div className="mb-3">
                  {" "}
                  <label>Email address</label>{" "}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
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
                <div className="mb-3">
                  {" "}
                  <div className="custom-control custom-checkbox">
                    {" "}
                    <input
                      type="checkbox"
                      className="custom- control-input"
                      id="customCheck1"
                    />{" "}
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      {" "}
                      Remember me{" "}
                    </label>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="d-grid ">
                  {" "}
                  <button type="submit" className="btn btn-danger">
                    {" "}
                    Submit{" "}
                  </button>{" "}
                </div>{" "}
                <p className="forgot-password text-right">
                  {" "}
                  Forgot <a href="#"> password?</a>{" "}
                </p>{" "}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
