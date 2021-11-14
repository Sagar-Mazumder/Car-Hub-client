import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            fetch('https://cryptic-retreat-32836.herokuapp.com/products', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)

            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              alert('successfully added service!')
                              reset();
                        }

                  })

      };
      return (
            <div>
                  <div className="container border-shadow mt-5">
                        <div className="row">
                              <div className="col-lg-7 long-padding">
                                    <div className="text-center">
                                          <h1 className="text-bold mb-4">Add Products</h1>
                                    </div>
                                    <div>
                                          <form className="add-service" onSubmit={handleSubmit(onSubmit)}>

                                                <input className="form-control"  {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                                                <textarea className="form-control"  {...register("description")} placeholder="Car description" />
                                                <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Product Price" />
                                                <input className="form-control"  {...register("img")} placeholder="Image url" />
                                                <input className="form-control" type="submit" />
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AddProduct;