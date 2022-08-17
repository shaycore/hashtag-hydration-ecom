import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';
// import { } from "../store";

const Products = ({ products }) => {
    return (
        <main>
            <h1>List of Products ({products.length})</h1>
            <ul id='products'>
                {
                    products.map( product => {
                        return (
                            <li key={ product.id }>
                                <Link to={`/products/${product.id}`}>
                                    { product.name } - ${ product.price }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <h2>Create New Product</h2>
            <ProductForm />
        </main>
    );
}

const mapStateToProps = (state) => state;


// const mapDispatch = (dispatch, { history, match }) => {
//     return {
//     }
// };

export default connect(mapStateToProps, null)(Products);