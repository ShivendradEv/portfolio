import React, { useState } from 'react';
import "./Header.css";

const Header = () => {

    const [active, setActive] = useState(false);

    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='navbar-brand'><img src='logo.webp' alt='logo' /></div>
                <div className={`navbar-menu ${active === true ? 'active' : ''}`}>
                    <div className='navbar-menu-icons'>
                        <div className='navbar-brand'><img src='logo.webp' alt='logo' /></div>
                        <button type='button' className='close' onClick={() => setActive(false)}><img src='close.webp' alt='close icon' /></button>
                    </div>
                    <ul>
                        <li><a href='#about' onClick={() => setActive(false)}>About</a></li>
                        <li><a href='#projects' onClick={() => setActive(false)}>Projects</a></li>
                        <li><a href='#contact' className='btn' onClick={() => setActive(false)}>Say hello</a></li>
                    </ul>
                </div>
                <button type='button' className='menu' onClick={() => setActive(true)}><img src='menu.webp' alt='menu icon' /></button>
            </nav>
        </div>
    )
}

export default Header
