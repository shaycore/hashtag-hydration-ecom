import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ auth, cart }) => {
    return (
        <div className='navbar'>
            
            <Link to='/'>
                <li className='nav-link'>HOME</li>
            </Link>
            <Link to='/about'> 
                ABOUT US
            </Link>
            <Link to='/products'>
                <li className='nav-link'>PRODUCTS</li>
            </Link>
            {
                auth.id ?
                <Link to='/account'>
                    <li className='nav-link'>MY ACCOUNT</li>
                </Link> :
                <Link to='/signin'>
                    <li className='nav-link'>LOGIN</li>
                </Link>
            }
            {
                auth.isAdmin ? 
                <Link to='/admin'>
                    <li className='nav-link'>ADMIN</li>
                </Link> : 
                <Link to='/wishlist'> 
                    <li className='nav-link'>WISHLIST</li>
                </Link>
            }
            {
                auth.isAdmin ? 
                null : 
                <Link to='/cart'>
                    <li className='nav-link'>CART ({ cart.lineItems.reduce((acc, lineitem) => acc + lineitem.quantity, 0 ) })</li>
                </Link>
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(Nav);