import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
      const { register, handleSubmit, reset } = useForm();
      const { user } = useAuth();
      const onSubmit = data => {
            fetch('https://cryptic-retreat-32836.herokuapp.com/reviews', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)

            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              alert('Review added successfully')
                              reset();
                        }
                  })
      };

      return (
            <div className="container add-service">
                  <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <textarea placeholder="Description" defaultValue="" {...register("description", { required: true })} />
                        <input placeholder="Enter Review number between 1-5" defaultValue="" {...register("ratings", { required: true })} />
                        <input type="submit" value="Review" />
                  </form>
            </div>
      );
};

export default Review;