import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProducts = () => {
      const [product, setProduct] = useState([])
      const [isUpdate, setIsUpdate] = useState(null)
      useEffect(() => {
            fetch('https://cryptic-retreat-32836.herokuapp.com/products')
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [isUpdate])
      const deletehandeler = id => {
            const proceed = window.confirm('Are you sure,you want to delete');
            if (proceed) {
                  const url = `https://cryptic-retreat-32836.herokuapp.com/products/${id}`
                  fetch(url, {
                        method: 'DELETE',
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully!')
                                    const remainingOrders = product.filter(userOrder => userOrder._id !== id)
                                    setProduct(remainingOrders);
                              }
                        });
            }
      }
      return (
            <div className="container">
                  {
                        product.map(cars => <Row xs={1} md={2} className="g-4">
                              <Col>
                                    <Card>
                                          <Card.Body>
                                                <Card.Title>{cars._id}</Card.Title>
                                                <Card.Title>{cars.name}</Card.Title>
                                                <button onClick={() => deletehandeler(cars._id)} className="btn btn-primary">DELETE</button>
                                          </Card.Body>
                                    </Card>
                              </Col>
                        </Row>
                        )
                  }
            </div>
      );
};

export default ManageProducts;