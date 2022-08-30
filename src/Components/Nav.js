import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        <Link to='home' smooth={true} duration={500} >
          <li className='text-2xl'>Home</li>
        </Link>
        <Link to='about' smooth={true} duration={500} >
          <li className='text-2xl'>About</li>
        </Link>
        <Link to='features' smooth={true} duration={500} >
          <li className='text-2xl'>Features</li>
        </Link>
        <Link to='testimonials' smooth={true} duration={500} >
          <li className='text-2xl'>Testimonials</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;