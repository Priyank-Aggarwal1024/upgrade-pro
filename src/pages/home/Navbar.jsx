import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="abcd-navbar">
            <div className="abcd-nav-left">
                <NavLink to="/" className="abcd-nav-logo">
                    <img src={Logo} className='abcd-va-mid abcd-logo-large' alt="Logo" />
                    <img src={Logo2} className='abcd-va-mid abcd-logo-small' alt="Logo" />
                </NavLink>
            </div>
            <div className="abcd-nav-btn">
                <NavLink className="abcd-nav-login-btn">Login </NavLink>
                <NavLink className="abcd-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>

    );
}

export default Navbar;