import React from 'react'
import { useState, useEffect } from 'react';
import About from '../pages/About';

function NavigateBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className='nav-Container'>
      <nav className={`nav-bar ${showNavbar ? '' : 'hidden'}`}>
        <div className="logo-box">
          <img src="https://i.hizliresim.com/qq0mqy9.png" alt="" />
        </div>
        <div className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavigateBar