import React, { useState } from 'react';
import { FaServer, FaBars, FaTimes, } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
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
                    {/* <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li> */}
                    <li className='li'>Home</li>
                    <li className='li'>Recovery</li>
                    <li className='li'>Cloud</li>
                    <li className='li'>Contact</li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar;