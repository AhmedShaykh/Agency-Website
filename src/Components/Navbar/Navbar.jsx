import React, { useState } from 'react';
import { FaServer, FaBars, FaTimes, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <FaServer className='icon' />
                    <h3 className='logo-text'>CYBER CITY</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className='li'><Link to='/'><a>Home</a></Link></li>
                    <li className='li'><Link to='/recovery'><a>Recovery</a></Link> </li>
                    <li className='li'><Link to='/cloud'><a>Cloud</a></Link></li>
                    <li className='li'><Link to='/contact'><a>Contact</a></Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar;