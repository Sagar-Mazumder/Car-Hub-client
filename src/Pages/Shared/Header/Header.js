import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
      const { user, logout } = useAuth();
      return (
            <div className="container mb-2">
                  <Navbar style={{ background: "#56D5C4" }} variant="dark" collapseOnSelect expand="lg">
                        <Container>
                              <Navbar.Brand as={Link} to="/home"><span><i className="fas fa-car me-2"></i></span>CurHub</Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link as={NavLink} style={{ color: 'white' }} to="/home">Home</Nav.Link>
                                    {user.email ? <Nav.Link as={NavLink} style={{ color: 'white' }} to="/dashboard">Dashboard</Nav.Link> : ''}

                                    {user.email ? <button className="btn btn-light" onClick={logout}>Logout</button> : <NavLink to="/login"><button className="btn btn-light">Login</button></NavLink>
                                    }
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;