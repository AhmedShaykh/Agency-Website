import React from 'react';
import { Link } from 'react-scroll';

const NavMobile = () => {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
      <Link to='about' smooth={true} duration={500} ><li>About</li></Link>
      <Link to='features' smooth={true} duration={500} ><li>Features</li></Link>
      <Link to='testimonials' smooth={true} duration={500} ><li>Testimonials</li></Link>
    </ul>
  );
};

export default NavMobile;