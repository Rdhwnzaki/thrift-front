import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import { Container } from "react-bootstrap";
import Tags from "../components/Tags";
import List from "../components/List";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-lg-3 border-end">
            <div className="d-flex flex-column">
              <div className="p-1">
                <h6 className="fw-normal">Women's Fashion</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Men's Fashion</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Electronics</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Home & Lifestyle</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Medicine</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Sport & Outdor</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Baby's & Toys</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Groceries & Pets</h6>
              </div>
              <div className="p-1">
                <h6 className="fw-normal">Health & Beauty</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <Carousel data-bs-theme='dark' className='mt-2'>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={c1}
                  alt='First slide'
                  style={{ height: "300px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={c2}
                  alt='Second slide'
                  style={{ height: "300px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={c3}
                  alt='Third slide'
                  style={{ height: "300px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
        <Tags title={"Today's"} name={"Flash Sales"} />
        <List />
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger mt-3">View All Products</button>
        </div>
        <hr className="mt-5" />
        <Tags title={"Categories"} name={"Browse By Category"} />
      </Container>
    </Fragment>
  );
}

export default Home;
