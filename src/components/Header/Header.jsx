import React, { useState } from 'react';
import "./Header.css";

const Header = () => {

    const [active, setActive] = useState(false);

    console.log(active)

    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a href='#'>S</a>
                </div>
                <div className={`navbar-menu ${active === true ? 'active' : ''}`}>
                    <div className='navbar-menu-icons'>
                        <div className='navbar-brand'>
                            <a href='#'>S</a>
                        </div>
                        <button type='button' className='close' onClick={() => setActive(false)}><img src='close.png' alt='close icon' /></button>
                    </div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#' className='btn'>Say hello</a></li>
                    </ul>
                </div>
                <button type='button' className='menu' onClick={() => setActive(true)}><img src='menu.png' alt='menu icon' /></button>
            </nav>
        </div>
    )
}

export default Header
