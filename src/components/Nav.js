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
            <Link to='/cart'>
                <li className='nav-link'>CART</li>
            </Link>
            <Link to='/admin'>
                <li className='nav-link'>Temporary Admin Link</li>
            </Link>
            <Link to='/about'> ABOUT US</Link>
            <Link to='/wishlist'> WISHLIST</Link>
        
        </div>
    )
};

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(Nav);