import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Admin = ({}) => {
    return (
        <main>
            <h2>Admin Main</h2>
            <ul>
                <Link to='/admin/products'>View Products</Link>
                <br />
                <Link to='/admin/orders'>View Orders</Link>
                <br />
                <Link to='/admin/users'>View Users</Link>
            </ul>
        </main>
    );
}

// const mapState = ({}) => {
//     return {
//     };
// };

// const mapDispatch = (dispatch, { history, match }) => {
//     return {
//     }
// };

export default connect()(Admin);