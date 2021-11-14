import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = ({ car }) => {
      const { _id, name, description, price, img } = car;
      return (
            <div>
                  <Col>
                        <Card>
                              <Card.Img className="h-75" variant="top" src={img} />
                              <Card.Body>
                                    <Card.Title style={{ color: "#56D5C4" }}>{name}</Card.Title>
                                    <Card.Text>
                                          {description.slice(0, 100)}
                                    </Card.Text>
                                    <Card.Text>
                                          <h5 ><span style={{ color: "#56D5C4" }} className="fw-bold">Price:</span>{price}$</h5>
                                    </Card.Text>
                                    <Link to={`/purchase/${_id}`}>
                                          <button style={{ background: "#56D5C4", color: "white" }} className="btn">Purchase</button>
                                    </Link>
                              </Card.Body>
                        </Card>
                  </Col>
            </div>
      );
};

export default Product;