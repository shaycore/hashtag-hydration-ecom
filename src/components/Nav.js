import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
            
            <Link to='/'>
                <li className='nav-link'>HOME</li>
            </Link>
            <Link to='/products'>
                <li className='nav-link'>PRODUCTS</li>
            </Link>
            <Link to='/'>
                <li className='nav-link'>SIGN IN</li>
            </Link>
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


export default Nav;