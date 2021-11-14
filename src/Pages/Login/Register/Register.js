import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Register = () => {
      const [loginData, setLoginData] = useState({});
      const history = useHistory();
      const { user, registerUser, isLoading, authError } = useAuth();
      const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
      }
      const handleLoginSubmit = e => {
            if (loginData.password !== loginData.password2) {
                  alert('Your password did not match');
                  return
            }
            registerUser(loginData.email, loginData.password, loginData.name, history);
            e.preventDefault();
      }
      return (
            <div className="container">

                  <h2 >Register</h2>
                  {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input
                              className="m-2 ps-5 pe-5"
                              placeholder="Enter your name"
                              name="name"
                              onBlur={handleOnBlur}
                              variant="standard" />
                        <br />
                        <input
                              className="ps-5 pe-5"
                              placeholder="Your Email"
                              name="email"
                              type="email"
                              onBlur={handleOnBlur}
                              variant="standard" />
                        <br />
                        <input
                              className="m-2 ps-5 pe-5"
                              placeholder="Your Password"
                              type="password"
                              name="password"
                              onBlur={handleOnBlur}
                              variant="standard" />
                        <br />
                        <input
                              className="m-2 ps-5 pe-5"
                              placeholder="ReType Your Password"
                              type="password"
                              name="password2"
                              onBlur={handleOnBlur}
                              variant="standard" />
                        <br />

                        <Button className="m-2" sx={{ width: '75%', m: 1 }} type="submit" variant="primary">Register</Button>
                        <br />
                        <NavLink
                              style={{ textDecoration: 'none' }}
                              to="/login">
                              <Button variant="primary">Already Registered? Please Login</Button>
                        </NavLink>
                  </form>}
                  {isLoading && <Spinner animation="border" />}
                  {user?.email && <div class="alert alert-primary" role="alert">
                        User Created Successfully
                  </div>}
                  {authError && <div class="alert alert-danger" role="alert">
                        {authError}
                  </div>}

            </div>
      );
};

export default Register;