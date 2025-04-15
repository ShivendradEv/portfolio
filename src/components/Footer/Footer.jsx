import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='container'>
            <footer>
                <div className='logo'><img src='logo.png' alt='logo' /></div>
                <div className='separator'></div>
                <p>© 2025 Shivendra Singh. All right reserved.</p>
                <p>Forever learning, building, and growing — one line of code at a time.</p>
                <ul>
                    <li><a href='https://github.com/ShivendradEv' target='_blank'><img src='logo-github.png' alt='github logo' /></a></li>
                    <li><a href='https://www.linkedin.com/in/shivendra-singh-86a676281/' target='_blank'><img src='logo-linkedin.png' alt='linkein logo' /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
