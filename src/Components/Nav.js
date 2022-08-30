import React from 'react';
import { Link } from 'react-scroll';
// import { navigationData } from '../Data';

const Nav = () => {
  return (
    <nav>
      {/* <ul className='flex gap-x-8'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul> */}
      <ul className="flex gap-x-8'">
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;