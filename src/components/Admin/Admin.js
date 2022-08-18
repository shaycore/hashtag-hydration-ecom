import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Admin = ({}) => {
    return (
        <main>
            <h1>This is the Admin</h1>
            <Link to='/admin/products'>View Products</Link>
            <br />
            <Link to='/admin/orders'>View Orders</Link>
            <br />
            <Link to='/admin/users'>View Users</Link>

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