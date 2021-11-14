import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
      return (
            <div className="container">
                  <div style={{ background: "#56D5C4" }} className=" py-4 mt-5">
                        <div className="row align-items-center">
                              <div className="col-lg-8 col-12">
                                    <div className="d-flex ps-lg-5 ps-0 flex-column flex-lg-row">
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">Download Now</Link></div>
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">License</Link></div>
                                    </div>
                                    <div className="d-flex flex-column ps-lg-5 ps-0 flex-lg-row">
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">About</Link></div>
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">Features</Link></div>
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">Pricing</Link></div>
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">Careers</Link></div>
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">Help</Link></div>
                                          <div><Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">Privacy Policy</Link></div>

                                    </div>
                              </div>
                              <div className="col-12 col-lg-4 text-lg-center py-sm-3  ps-4 ps-lg-0">
                                    <h6 className="text-white pt-4">
                                          Get The App
                                    </h6>
                                    <div>
                                          <Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">
                                                <img className="img-footer" src="https://i.ibb.co/GxYrPcH/footer-1.jpg" alt="" /> </Link>

                                    </div>
                                    <div>
                                          <Link className="nav-link active p-2 fw-bold text-white" aria-current="page" to="#">
                                                <img className="img-footer" src="https://i.ibb.co/hDkVGdj/footer-2.jpg" alt="" /> </Link>
                                    </div>
                              </div> <hr />
                              <div className="text-center">
                                    <p className="text-white fw-normal"><i className="fas fa-copyright"></i> All rights reserved by Sagar Mazumder</p>
                              </div>
                        </div>

                  </div>
            </div>

      );
};

export default Footer;