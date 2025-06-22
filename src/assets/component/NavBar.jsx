import { nav } from "framer-motion/client";
import { Links } from "react-router-dom";

import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0); // fixed once you scroll down at all
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-[1840px] h-[150px] px-[5px] md:px-25 py-10 bg-black opacity-70 z-50 ${
        isFixed ? 'fixed top-0 left-0' : 'absolute top-0 left-0'
      }`}
    >
       <div className="md:flex md:justify-between md:items-center ">
        <img
          src="/src/assets/Image/logo.png"
          alt="Logo"
          className="w-[200px] h-[50px] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <ul className="flex gap-10 text-white text-[30px] font-bold">
          <li>
            <a href="#home" className="hover:text-[26px]">Home</a>
          </li>
          <li>
            <a href="#About" className="hover:text-[26px]">About</a>
          </li>
          <li>
            <a href="#Portfolio" className="hover:text-[26px]">Portfolio</a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-[26px]">Contact</a>
          </li>
        </ul>
        </div>
      </nav>  
    );
}
export default Navbar;