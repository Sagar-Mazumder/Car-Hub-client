import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
      const [loginData, setLoginData] = useState({});
      const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
      const location = useLocation();
      const history = useHistory();
      const handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
      }
      const handleLoginSubmit = e => {
            loginUser(loginData.email, loginData.password, location, history);
            e.preventDefault();
      }

      const handleGoogleSignIn = () => {
            signInWithGoogle(location, history)
      }
      return (
            <div className="container">
                  <h3>Login</h3>
                  {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input
                              label="Your Email"
                              type="email"
                              name="email"
                              onChange={handleOnChange}
                              variant="standard" />
                        <br />
                        <input className="m-3"
                              label="Your Password"
                              type="password"
                              name="password"
                              onChange={handleOnChange}
                              variant="standard" />
                        <br />
                        <Button className="m-3" type="submit" variant="primary">Login</Button>
                        <br />
                        <NavLink
                              style={{ textDecoration: 'none' }}
                              to="/register">
                              <Button variant="primary">New User?Please Register</Button>
                        </NavLink>
                  </form>}
                  {isLoading && <Spinner animation="border" />}
                  {user?.email && <div class="alert alert-primary" role="alert">
                        Login Successfully
                  </div>}
                  {authError && <div class="alert alert-danger" role="alert">
                        {authError}
                  </div>}
                  <p>------------------------</p>
                  <Button onClick={handleGoogleSignIn} variant="primary">Google Sign In</Button>
            </div>
      );
};

export default Login;