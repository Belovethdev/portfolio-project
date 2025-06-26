import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null); // NEW

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      // If menu is open AND clicked target is outside BOTH menu and toggle button
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`w-full sm:h-[120px] h-[80px] px-[10px] md:px-25 py:2 md:py-5 bg-black opacity-70 z-50 ${
        isFixed ? 'fixed top-0 left-0' : 'absolute top-0 left-0 px-[15px] md:px-25 py-2 md:py-5'
      }`}
    >
      <div className="md:px-50 px-20 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src="/src/assets/Image/logo.png"
          alt="Logo"
          className="md:w-[200px] md:h-[50px] w-[150px] h-[40px] cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuOpen(false);
          }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white text-[18px] font-bold">
          <li><a href="#home" className="hover:text-[22px] cursor-pointer">Home</a></li>
          <li><a href="#About" className="hover:text-[22px] cursor-pointer">About</a></li>
          <li><a href="#Portfolio" className="hover:text-[22px] cursor-pointer">Portfolio</a></li>
          <li><a href="#Contact" className="hover:text-[22px] cursor-pointer">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" ref={toggleRef}>
          {menuOpen ? (
            <button onClick={() => setMenuOpen(false)} className="text-white z-50 relative">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setMenuOpen(true)} className="text-white z-50 relative cursor-pointer">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Slide-in Menu from Right */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-100 w-[250px] bg-black text-white transform transition-transform duration-300 z-40 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col mt-28 ml-6 gap-10 text-lg font-semibold">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#Portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" />}
    </nav>
  );
}

export default Navbar;
