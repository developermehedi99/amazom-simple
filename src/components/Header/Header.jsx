import React from 'react';
import "./Header.css"
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">order</a>
                <a href="/order review">order Review</a>
                <a href="/manager">Manager inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;