import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center px-4 md:px-8 lg:px-16 relative">
      {/* Hamburger Icon */}
      <div className="flex items-center md:hidden">
        <div className="cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Logo */}
      <div
        className={`text-2xl font-bold transition-all duration-300 ${
          isMenuOpen && "absolute top-4 left-1/2 transform -translate-x-1/2"
        }`}
      >
        TyrePlex
      </div>

      <div className="flex-1 hidden md:block"></div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center absolute top-full left-0 w-1/2 md:w-full bg-white py-4 z-10 md:flex md:flex-row md:static md:bg-transparent md:py-0`}
      >
        <ul className="flex flex-col md:flex-row gap-6 w-full md:w-auto text-center">
          <li>
            <a href="#products" className="hover:text-blue-500 block py-2">
              Tyres
            </a>
          </li>
          <li>
            <a href="#deals-in" className="hover:text-blue-500 block py-2">
              Deals In
            </a>
          </li>
          <li>
            <a
              href="#services-offered"
              className="hover:text-blue-500 block py-2"
            >
              Services
            </a>
          </li>
          <li>
            <a href="#payment" className="hover:text-blue-500 block py-2">
              Payment
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-blue-500 block py-2">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contactus" className="hover:text-blue-500 block py-2">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
