import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';
// import { } from "../store";

const AdminProducts = ({ products }) => {
    return (
        <main>
            <Link to={'/admin/'}>Return to Admin Main</Link>
            <br />
            <h2>List of Products ({products.length})</h2>
            <ul id='products'>
                {
                    products.map( product => {
                        return (
                            <li key={ product.id }>
                                <Link to={`/admin/products/${product.id}`}>
                                    { product.name }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <h4>Create New Product</h4>
            <ProductForm />
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

export default connect(mapStateToProps, null)(AdminProducts);