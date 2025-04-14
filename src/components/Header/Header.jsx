import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a href='#'>S</a>
                </div>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#' className='btn'>Say hello</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
