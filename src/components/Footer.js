import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = ({ auth }) => {
    return (
        <div className='container-fluid bg-secondary text-dark mt-5 pt-5'>
            <div className='row px-xl-5 pt-5'>
                <div className='col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5'>
                    <h1>Hashtag Hydration</h1>
                    <p>Your oasis away from home.</p>
                    <p className="mb-2">
                        <i className='fa fa-map-marker-alt text-primary mr-3'>Location</i>
                        112 New York, New York, USA
                    </p>
                    <p className="mb-2">
                        <i className='fa fa-envelope text-primary mr-3'>Email</i>
                        hello@hashtaghydration.com
                    </p>
                    <p className="mb-0">
                        <i className='fa fa-phone-alt text-primary mr-3'>Phone</i>
                        222-222-2222
                    </p>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-dark mb-2" href="/">Home Page</a>
                                <a className="text-dark mb-2" href="/products">Products</a>
                                <a className="text-dark mb-2" href="/account">Account</a>
                                <a className="text-dark mb-2" href="/wishlist">Wishlist</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Brand</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-dark mb-2" href="/about">About Us</a>
                                <a className="text-dark mb-2" href="/">Meet the Team!</a>
                                <a className="text-dark mb-2" href="/">FAQs</a>
                                <a className="text-dark mb-2" href="/">Shipping Policy</a>
                                <a className="text-dark mb-2" href="/">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control boder-0 py-4" placeholder="Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control boder-0 py-4" placeholder="Email" required="required" />
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block border-0 py-3" type='submit'>Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border-top border-light mx-xl-5 py-4">
                <div className="col-md-6 px-xl-0">
                    <a className="text-dark font-weight-semi-bold" href="/">© Hashtag Hydration. </a>
                    All Rights Reserved. Designed by Team 1.
                </div>
                <div className="col-md-6 px-xl-0 text-center text-md-right">
                    Payment Image Here (or social media links)
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(Footer);