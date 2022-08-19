import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ auth }) => {
    return (
        <div className='navbar'>
            
            <Link to='/'>
                <li className='nav-link'>HOME</li>
            </Link>
            <Link to='/products'>
                <li className='nav-link'>PRODUCTS</li>
            </Link>
            {
                auth.id ?
                <Link to='/account'>
                    <li className='nav-link'>ACCOUNT</li>
                </Link> :
                <Link to='/signin'>
                    <li className='nav-link'>SIGN IN</li>
                </Link>
            }
            <Link to='/orders'>
                <li className='nav-link'>ORDERS</li>
            </Link>
            <Link to='/admin'>
                <li className='nav-link'>Temporary Admin Link</li>
            </Link>
            <Link to='/about'> About Us</Link>
            <Link to='/wishlist'> Wish List</Link>
        
        </div>
    )
};

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(Nav);