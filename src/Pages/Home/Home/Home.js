import React from 'react';
import Banner from '../Banner/Banner';
import CarItems from '../CarItems/CarItems';
import HomeReview from '../HomeReview/HomeReview';
import Question from '../Question/Question';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <CarItems></CarItems>
                  <HomeReview></HomeReview>
                  <Question></Question>
            </div>
      );
};

export default Home;