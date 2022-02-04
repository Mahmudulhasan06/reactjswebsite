import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <>
            <footer className="bg-dark text-center text-white" style={{ paddingTop: '50px' }}>
                <div className="container p-4">
                    <section className="">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase" style={{ textAlign: 'left' }}>ABOUT US</h5>
                                <p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="mb-4" style={{ textAlign: 'left' }}>
                                    <Link className="btn btn-outline-light btn-floating m-1" to="https://google.com" role="button"
                                    ><i className="fab fa-facebook-f"></i></Link>

                                    <Link className="btn btn-outline-light btn-floating m-1" to="https://google.com" role="button"
                                    ><i className="fab fa-twitter"></i></Link>

                                    <Link className="btn btn-outline-light btn-floating m-1" to="https://google.com" role="button"
                                    ><i className="fab fa-google"></i></Link>

                                    <Link className="btn btn-outline-light btn-floating m-1" to="https://google.com" role="button"
                                    ><i className="fab fa-instagram"></i></Link>

                                    <Link className="btn btn-outline-light btn-floating m-1" to="https://google.com" role="button"
                                    ><i className="fab fa-linkedin-in"></i></Link>

                                    <Link className="btn btn-outline-light btn-floating m-1" to="https://google.com" role="button"
                                    ><i className="fab fa-github"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ textAlign: 'left' }}>
                                <h5 className="text-uppercase">INFORMATION</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="https://google.com" className="text-white">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">Manufactures</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">Tracking Order</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">Privacy & Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">Terms & Conditions</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ textAlign: 'left' }}>
                                <h5 className="text-uppercase">MY ACCOUNT</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="https://google.com" className="text-white">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">My Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">Compare</Link>
                                    </li>
                                    <li>
                                        <Link to="https://google.com" className="text-white">My Account</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ textAlign: 'left' }}>
                                <form action="">
                                    <div className="row d-flex flex-column">
                                        <div className="col-auto">
                                            <h5 className="pt-2 text-capitalize">
                                                Sign up for our newsletter
                                            </h5>
                                        </div>

                                        <div className="pt-3">
                                            <div className="form-outline form-white mb-4">
                                                <input type="email" id="form5Example21" className="form-control" style={{ border: '1px solid #b6b4b473' }} />
                                                <label className="form-label" htmlFor="form5Example21">Email address</label>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <button type="submit" className="btn mb-4" style={{ background: '#FF7004', color: '#fff' }}>
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2021, Furns. 
                    <Link className="text-white" to="https://google.comtps://google.com">Made With ❤️ by Mahmudul hasan.</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer2
