import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';
// import { } from "../store";

const AdminProducts = ({ products }) => {
    return (
        <div>
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        List of Products ({products.length})
                    </h1>
                    <div className="d-inline-flex">
                        <p className="m-0">
                            <Link to={'/admin/'}>Return to Admin Main</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 justify-content-center">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>View More/Edit</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {
                                    products.map( product => {
                                        return (
                                            <tr key={ product.id }>
                                                <td className="align-middle">
                                                    { product.id }
                                                </td>
                                                <td className="align-middle text-left">
                                                    <img src={ product.image} style={{width:"50px"}} />
                                                    { product.name }
                                                </td>
                                                <td className="align-middle">
                                                    ${ Number(product.price).toFixed(2) }
                                                </td>
                                                <td className="align-middle">
                                                    <Link to={`/admin/products/${product.id}`}>View More</Link> <br />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-header bg-secondary text-dark">Add a New Product</div>
                        <div className="card-body">
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // <main>
        //     <Link to={'/admin/'}>Return to Admin Main</Link>
        //     <br />
        //     <h2>List of Products ({products.length})</h2>
        //     <ul id='products'>
        //         {
        //             products.map( product => {
        //                 return (
        //                     <li key={ product.id }>
        //                         <Link to={`/admin/products/${product.id}`}>
        //                             { product.name }
        //                         </Link>
        //                     </li>
        //                 )
        //             })
        //         }
        //     </ul>
        //     <h4>Create New Product</h4>
        //     <ProductForm />
        // </main>
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

export default connect(mapStateToProps, null)(AdminProducts);