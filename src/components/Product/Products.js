import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { } from "../store";

const Products = ({ products }) => {
    return (
        <main>
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        Our Products ({products.length})
                    </h1>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-12">
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Collection:</h5>
                            View All <br />
                        </div>
                    </div>
                    
                    {/* Product Listing Begins Here*/}
                    <div className="col-lg-9 col-md-12">
                        <div className="row pb-3">
                                {
                                    products.map( product => {
                                        return (
                                            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                                <div className="card product-item border-0 mb-4">
                                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                        <Link to={`/products/${product.id}`}>
                                                            <img className="img-fluid w-100" src={ product.image } alt='Product Image' />
                                                        </Link>
                                                    </div>
                                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                            <p className="text-truncate mb-3">{ product.name }</p>
                                                            <p>${ product.price }</p>   
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};


// const mapDispatch = (dispatch, { history, match }) => {
//     return {
//     }
// };

export default connect(mapStateToProps, null)(Products);