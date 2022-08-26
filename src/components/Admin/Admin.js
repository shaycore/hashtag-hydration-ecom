import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Admin = ({}) => {
    return (
        <main>
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        Admin Main Page
                    </h1>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3 justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                            <h1 className="bi-cup-straw text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">
                                <Link to='/admin/products'>View Products</Link>
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                            <h1 className="bi-bag-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">
                                <Link to='/admin/orders'>View Orders</Link>
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                            <h1 className="bi-person-badge text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">
                                <Link to='/admin/users'>View Users</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default connect()(Admin);