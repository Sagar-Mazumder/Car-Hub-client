import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
      Switch,
      Route,
      useRouteMatch,

} from "react-router-dom"
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import Myorder from '../Myorder/Myorder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
      let { path, url } = useRouteMatch();
      const { user, logout, admin } = useAuth();
      return (
            <div className="container">
                  <div className="row flex-nowrap">
                        <div style={{ background: "#56D5C4" }} className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                    <ul className="nav flex-column mt-4 mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                                          {/* User */}

                                          {!admin && <div>

                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/pay`} className="nav-link align-middle px-3">
                                                            <i className="fas fa-money-bill-wave"></i>

                                                            <span className="ms-1 d-none d-sm-inline">Pay</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/myOrder`} className="nav-link align-middle px-3">
                                                            <i className="fas fa-shopping-cart"></i>
                                                            <span className="ms-1 d-none d-sm-inline">My Order</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/review`} className="nav-link align-middle px-3">
                                                            <i className="fas fa-clipboard-list"></i>
                                                            <span className="ms-1 d-none d-sm-inline">Review</span>
                                                      </NavLink>
                                                </li>
                                          </div>}

                                          {/* Admin */}
                                          {admin && <div>
                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/manageAllOrders`} className="nav-link align-middle px-0">
                                                            <i className="fas fa-user-edit"></i>
                                                            <span className="ms-1 d-none d-sm-inline">Manage All Orders</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/addProducts`} className="nav-link align-middle px-3">
                                                            <i className="fas fa-plus-circle"></i>
                                                            <span className="ms-1 d-none d-sm-inline">Add Products</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/makeAdmin`} className="nav-link align-middle px-3">
                                                            <i className="fas fa-user-shield"></i>
                                                            <span className="ms-1 d-none d-sm-inline">Make Admin</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                      <NavLink
                                                            activeStyle={{
                                                                  fontWeight: "bold",
                                                                  color: "black"
                                                            }}
                                                            style={{ color: 'white' }} to={`${url}/manageProducts`} className="nav-link align-middle px-3">
                                                            <i className="far fa-caret-square-right"></i>
                                                            <span className="ms-1 d-none d-sm-inline">Manage Products</span>
                                                      </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                      {user.email &&
                                                            <Button onClick={logout} className="mt-3" variant="light">Logout
                                                                  <i className="ps-3 fas fa-sign-out-alt"></i>
                                                            </Button>}
                                                </li>

                                          </div>}
                                    </ul>

                                    <div className="dropdown pb-4">

                                    </div>

                              </div>
                        </div>
                        <div className="col py-3">
                              <Switch>
                                    <Route path={`${path}/pay`}>
                                          <Pay></Pay>
                                    </Route>
                                    <Route path={`${path}/myOrder`}>
                                          <Myorder></Myorder>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                          <Review></Review>
                                    </Route>
                                    <AdminRoute path={`${path}/manageAllOrders`}>
                                          <ManageOrder></ManageOrder>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addProducts`}>
                                          <AddProduct></AddProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/makeAdmin`}>
                                          <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageProducts`}>
                                          <ManageProducts></ManageProducts>
                                    </AdminRoute>
                              </Switch>
                        </div>
                  </div>

            </div>
      );
};

export default Dashboard;