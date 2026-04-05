import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobiles'>Mobiles</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            
            </nav>
            <p>This is header</p>
        </div>
    );
};

export default Header;