import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth'
import './Purchase.css'
const Purchase = () => {
      const { productId } = useParams();
      const { register, handleSubmit, reset } = useForm();
      const [products, setProducts] = useState([]);
      const { user } = useAuth();
      let orderStatus = "pending";
      const onSubmit = data => {
            data.status = orderStatus;
            fetch('https://cryptic-retreat-32836.herokuapp.com/orders', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)

            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              alert('Purchase Submitted.Please wait for response')
                              reset();
                        }
                  })
      };
      useEffect(() => {
            fetch(`https://cryptic-retreat-32836.herokuapp.com/products/${productId}`)
                  .then(res => res.json())
                  .then(data => {
                        setProducts(data)
                  })
      }, [])
      return (
            <div className="container add-service">
                  <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        {products.name && <input defaultValue={products.name} {...register("carName")} />}
                        {products.description && <textarea defaultValue={products.description} {...register("description")} />}
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input type="number" placeholder="Phone Number" defaultValue="" {...register("phone", { required: true })} />
                        <input type="submit" value="Purchase" />
                  </form>
            </div>
      );
};

export default Purchase;