import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const data2 = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ];
  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "130px" }}>
        <Carousel data-bs-theme='dark' className='mt-2'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={c1}
              alt='First slide'
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={c2}
              alt='Second slide'
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={c3}
              alt='Third slide'
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className='mt-4'>
          {data.map((dat, datIdx) => {
            return (
              <Col lg={3} className='mb-3' key={datIdx}>
                <Card>
                  <div className='d-flex flex-row'>
                    <div className='p-2'>
                      <Card.Img
                        variant='top'
                        src={p1}
                        style={{ height: "90px" }}
                      />
                    </div>
                    <div className='p-2 mt-3'>
                      <h6>Name</h6>
                      <h6>Desc</h6>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#f0f3f7",
        }}></div>
      <Container>
        <Row className='mt-4'>
          {data2.map((dat, datIdx) => {
            return (
              <Col lg={2} className='mb-3' key={datIdx}>
                <Card>
                  <div className='p-2'>
                    <Card.Img
                      variant='top'
                      src={p2}
                      style={{ height: "170px" }}
                    />
                  </div>
                  <div className='p-2 mt-3'>
                    <h6>Name</h6>
                    <h6>Desc</h6>
                    <h6>Harga</h6>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
