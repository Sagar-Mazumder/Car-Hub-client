import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';

const Question = () => {
      return (

            <div className="container">
                  <h1 style={{ color: "#56D5C4" }} className="mt-5 mb-5">Faq's</h1>
                  <Row xs={1} md={2}  >

                        <Col >
                              <img className="img-fluid" src="https://i.ibb.co/1RkdvPQ/question.png" alt="" />
                        </Col>

                        <Col >
                              <Accordion defaultActiveKey="0">
                                    <Accordion.Item style={{ background: "#56D5C4" }} eventKey="0">
                                          <Accordion.Header >Is this site safe?</Accordion.Header>
                                          <Accordion.Body>
                                                Yes, this site is fully safe and secured. You can freely search anything.
                                          </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item style={{ background: "#56D5C4" }} eventKey="1">
                                          <Accordion.Header>How many Cars are here?</Accordion.Header>
                                          <Accordion.Body>
                                                There are lot's of cars where you can choose anyone.
                                          </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item style={{ background: "#56D5C4" }} eventKey="2">
                                          <Accordion.Header>Is there all cars are trust able?</Accordion.Header>
                                          <Accordion.Body>
                                                Yes, 100% trust able.We Researched and after that we input all details about cars.
                                          </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item style={{ background: "#56D5C4" }} eventKey="3">
                                          <Accordion.Header>Where is your head office?</Accordion.Header>
                                          <Accordion.Body>
                                                It's situated in Dhanmondi, road-8, Dhaka.
                                          </Accordion.Body>
                                    </Accordion.Item>
                              </Accordion>
                        </Col>
                  </Row>
            </div>

      );
};

export default Question;