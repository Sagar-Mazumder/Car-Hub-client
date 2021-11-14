import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CarItem from '../CarItem/CarItem';

const CarItems = () => {
      const [product, setProduct] = useState([])
      useEffect(() => {
            fetch('https://cryptic-retreat-32836.herokuapp.com/products')
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [])
      return (
            <div>
                  <div className="container">
                        <h1 style={{ color: "#56D5C4" }} className="fs-1 mt-5">Some Of Our Products</h1>
                        <Row xs={1} md={3} className="g-4">
                              {
                                    product.slice(0, 6).map(car => <CarItem
                                          key={car._id}
                                          car={car}
                                    ></CarItem>)
                              }
                        </Row>
                  </div>
            </div>
      );
};

export default CarItems;