import React from 'react';
import { FaServer } from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './FooterStyles.css';

import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <FaServer className='icon' />
                        <h2 className='pointer'>CYBER CITY</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3 className='pointer'>Navigation</h3>
                        <p className='pointer'>Home</p>
                        <p className='pointer'>Recovery</p>
                        <p className='pointer'>Cloud</p>
                        <p className='pointer'>Contact</p>
                    </div>
                    <div className="col">
                        <h3 className='pointer'>My Account</h3>
                        <p className='pointer'>Home</p>
                        <p className='pointer'>Recovery</p>
                        <p className='pointer'>Cloud</p>
                        <p className='pointer'>Contact</p>
                    </div>
                    <div className="col">
                        <h3 className='pointer'>Information</h3>
                        <p className='pointer'>Home</p>
                        <p className='pointer'>Recovery</p>
                        <p className='pointer'>Cloud</p>
                        <p className='pointer'>Contact</p>
                    </div>
                    <div className="col">
                        <h3 className='pointer'>Legal</h3>
                        <p className='pointer'>Home</p>
                        <p className='pointer'>Recovery</p>
                        <p className='pointer'>Cloud</p>
                        <p className='pointer'>Contact</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiTwitter className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;