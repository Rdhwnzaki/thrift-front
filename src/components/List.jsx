import React, { Fragment } from 'react'
import img from "../assets/images/p1.png"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap"
import { CardFooter } from 'react-bootstrap';

function List() {
    const data = [1, 2, 3, 4];
    return (
        <Fragment>
            <Row>
                {data.map((datas) => {
                    return (
                        <Col lg={3}>
                            <Card
                                style={{
                                    width: '16rem',
                                }}
                                className='mb-3 border-0'
                            >
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/200/150"
                                    style={{ borderRadius: "5px 5px 0px 0px" }}
                                />
                                <CardFooter className='bg-dark text-white text-center' style={{ borderRadius: "0px 0px 5px 5px" }}>Add To Cart</CardFooter>
                                <CardBody>
                                    <CardTitle tag="h6">
                                        Name
                                    </CardTitle>
                                    <CardText style={{ color: "#db4444" }}>
                                        Rp.200.000
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Fragment>
    )
}

export default List