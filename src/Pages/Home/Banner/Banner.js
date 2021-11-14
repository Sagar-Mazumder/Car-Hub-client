import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
      return (
            <div>
                  <Container>
                        <Carousel variant="dark">
                              <Carousel.Item>
                                    <img
                                          className="d-block w-100"
                                          src="https://i.ibb.co/LPs9NsZ/banner-1.jpg"
                                          alt="First slide"
                                    />
                                    <Carousel.Caption>
                                          <h3 style={{ color: "#56D5C4" }} className="fw-bolder fs-1">BOOK YOUR CAR AND GET GOOD EXPERIENCE</h3>

                                          <Link to="/explore"> <Button style={{ background: "#56D5C4", border: "none" }}>EXPLORE MORE</Button>{' '}</Link>

                                    </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                    <img
                                          className="d-block w-100"
                                          src="https://i.ibb.co/SV0pznW/banner-2.jpg"
                                          alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                          <h3 style={{ color: "#56D5C4" }} className="fw-bolder fs-1">BOOK YOUR DREAM CAR FROM US</h3>
                                          <Link to="/explore"> <Button style={{ background: "#56D5C4", border: "none" }}>EXPLORE MORE</Button>{' '}</Link>

                                    </Carousel.Caption>
                              </Carousel.Item>

                        </Carousel>
                  </Container>
            </div>
      );
};

export default Banner;