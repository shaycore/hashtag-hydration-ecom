import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({}) => {
    return (
        <main>
            <h1>This is a Clothing Store</h1>
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

export default connect()(Home);