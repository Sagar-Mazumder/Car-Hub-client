import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Myorder = () => {
      const { user } = useAuth();
      const [userOrders, setUserOders] = useState([]);
      useEffect(() => {
            fetch(`https://cryptic-retreat-32836.herokuapp.com/orders?email=${user.email}`)
                  .then(res => res.json())
                  .then(data => setUserOders(data))
      }, [])

      const handleDeleteOrder = id => {
            const proceed = window.confirm('Are you sure,you want to delete');
            if (proceed) {
                  const url = `https://cryptic-retreat-32836.herokuapp.com/orders/${id}`
                  fetch(url, {
                        method: 'DELETE',
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully!')
                                    const remainingOrders = userOrders.filter(userOrder => userOrder._id !== id)
                                    setUserOders(remainingOrders);
                              }
                        });
            }
      }
      return (
            <div>
                  <Container className="my-5">
                        <Row xs={1} md={2} lg={2} className="g-4">
                              {
                                    userOrders.map(myOrder =>
                                    (
                                          <Col key={myOrder._id}>
                                                <Card>
                                                      <Card.Body className="text-start">
                                                            <Card.Text>
                                                                  <h6>My Name: {myOrder.name}</h6>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                  <h6>Email: {myOrder.email}</h6>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                  <h6>phone: {myOrder.phone}</h6>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                  <h6>Car Name: {myOrder.carName}</h6>
                                                            </Card.Text>
                                                            <div className="d-flex align-items-center">
                                                                  <Card.Text>
                                                                        <h6>status: {myOrder.status}</h6>
                                                                  </Card.Text>
                                                            </div>
                                                            <button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-danger">Delete</button>
                                                      </Card.Body>
                                                </Card>
                                          </Col>
                                    )
                                    )
                              }
                        </Row>
                  </Container>
            </div>
      );
};

export default Myorder;