import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Ratings from '../Ratings/Ratings';

const HomeReview = () => {
      const [review, setReview] = useState([])
      useEffect(() => {
            fetch('https://cryptic-retreat-32836.herokuapp.com/reviews')
                  .then(res => res.json())
                  .then(data => setReview(data))
      }, [])
      return (
            <div>
                  <div className="container">
                        <h1 style={{ color: "#56D5C4" }} className="fs-1 mt-5">Customer Ratings</h1>
                        <Row xs={1} md={3} className="g-4">
                              {
                                    review.map(review => <Ratings
                                          key={review._id}
                                          review={review}
                                    ></Ratings>)
                              }
                        </Row>
                  </div>
            </div>
      );
};

export default HomeReview;