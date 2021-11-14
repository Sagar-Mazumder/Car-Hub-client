import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
      const [email, setEmail] = useState('')
      const handleOnBlur = e => {
            setEmail(e.target.value)
      }
      const handleAdminSubmit = e => {
            const user = { email }
            fetch('https://cryptic-retreat-32836.herokuapp.com/users/admin', {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)

            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount) {
                              alert('Make admin done...')
                        }
                  })
            e.preventDefault();
      }
      return (
            <div>
                  <h2>Make a admin</h2>
                  <form onSubmit={handleAdminSubmit}>
                        <input
                              className="m-2"
                              onBlur={handleOnBlur}
                              label="Email"
                              type="email"
                              variant="standard" />
                        <Button type="submit" variant="primary">Make Admin</Button>
                  </form>
            </div>
      );
};

export default MakeAdmin;