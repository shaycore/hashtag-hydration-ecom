import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                                <Link to={`/product/${product.id}`}>
                                    { product.name }
                                </Link>
                                {/* <button onClick={ ()=> deleteCampus(campus)}>x</button> */}
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
}

const mapState = ({ products }) => {
    return {
        products
    };
};

// const mapDispatch = (dispatch, { history, match }) => {
//     return {
//     }
// };

export default connect(mapState, null)(Products);