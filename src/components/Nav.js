import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>
                    <li>HOME</li>
                </Link>
                <Link to='/products'>
                    <li>PRODUCTS</li>
                </Link>
                <Link to='/'>
                    <li>SIGN IN</li>
                </Link>
                <Link to='/orders'>
                    <li>ORDERS</li>
                </Link>
                <Link to='/admin'>
                    <li>Temporary Admin Link</li>
                </Link>
        </nav>
    )
};


export default Nav;