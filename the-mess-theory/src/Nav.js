// src/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import logo from './asset/tmt-logo.png'
import profileIcon from './asset/profile-icon-design-free-vector.jpg'
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu for smaller screens
    const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='bg-zinc-800 flex justify-between items-center pr-4 text-yellow-300 relative'>
         {/*Website logo*/}
        <img src={logo} className='h-16' alt='Logo'></img>
    
        {/*hamburger logo for small screen, improve this*/}
        <button className='sm:hidden flex flex-col justify-center items-center' onClick={handleMenuToggle}>
            <div className='h-1 w-8 bg-yellow-300 mb-1'></div>
            <div className='h-1 w-8 bg-yellow-300 mb-1'></div>
            <div className='h-1 w-8 bg-yellow-300'></div>
        </button>        

        {/*option on nav-bar for large screen*/}
        <ul className='hidden sm:flex space-x-4'>
            <li>Home</li>
            <li>History</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>

        {/*View profile*/}
        <img src={profileIcon} alt="Profile" className='p-1 h-10 w-10 rounded-full' />

        {/*Dropdown for hamburger*/}
        {isMenuOpen && (
        <ul className='absolute left-0 right-0 top-16 w-full bg-zinc-800 text-center flex flex-col space-y-2 sm:hidden'>
          <li>{/*<Link to="/">Home</Link>*/}Home</li>
          <li>{/*<Link to="/">Home</Link>*/}History</li>
          <li>{/*<Link to="/">Home</Link>*/}Servives</li>
          <li>{/*<Link to="/">Home</Link>*/}Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
