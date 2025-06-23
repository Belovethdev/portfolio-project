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
      className={`w-full h-[120px] px-[5px] md:px-25 py-5 bg-black opacity-70 z-50 ${
        isFixed ? 'fixed top-0 left-0 ' : 'absolute top-0 left-0 px-[5px] md:px-25 py-5'
      }`}

// import React, { useState, useEffect, useRef } from "react";

// function Navbar() {
//   const [show, setShow] = useState(true);
//   const lastScrollY = useRef(0);

//   const controlNavbar = () => {
//     if (window.scrollY > lastScrollY.current) {
//       setShow(false); // scrolling down - hide
//     } else {
//       setShow(true); // scrolling up - show
//     }
//     lastScrollY.current = window.scrollY;
//   };

//   useEffect(() => {
//     lastScrollY.current = window.scrollY; // initialize scroll position
//     window.addEventListener("scroll", controlNavbar);
//     return () => window.removeEventListener("scroll", controlNavbar);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white transition-transform duration-300 z-50 ${
//         show ? "translate-y-0" : "-translate-y-full"
//       }`}
    >
      <div className="md:flex md:justify-between md:items-center md:px-50 md:py-4">
        <img
          src="/src/assets/Image/logo.png"
          alt="Logo"
          className="w-[200px] h-[50px] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <ul className="flex gap-10 text-white text-[18px] font-bold">
          <li>
            <a href="#home" className="hover:text-[22px] cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-[22px] cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#Portfolio" className="hover:text-[22px] cursor-pointer">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-[22px] cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
