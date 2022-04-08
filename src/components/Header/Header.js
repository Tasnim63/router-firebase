import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>LogIn</Link>
            </nav>

        </div>
    );
};

export default Header;