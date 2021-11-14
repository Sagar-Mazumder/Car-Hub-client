import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Ratings = ({ review }) => {
      const { name, email, description, ratings } = review;
      return (
            <div>
                  <Col>
                        <Card>
                              <Card.Body>
                                    <Card.Title >{name}</Card.Title>
                                    <Card.Title style={{ color: "#56D5C4" }}>{email}</Card.Title>
                                    <Card.Text>
                                          {description}
                                    </Card.Text>
                                    <Card.Text>
                                          <Rating
                                                initialRating={ratings}
                                                emptySymbol="far fa-star text-warning"
                                                fullSymbol="fas fa-star text-warning"
                                                readonly
                                          />
                                    </Card.Text>

                              </Card.Body>
                        </Card>
                  </Col>

            </div>
      );
};

export default Ratings;