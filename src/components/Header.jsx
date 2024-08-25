import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 flex justify-normal items-center md:justify-between px-4 md:px-8 lg:px-16">
      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
        {!isMenuOpen && <FaBars size={24} />}
      </div>

      {/* Logo */}
      <div className={`text-2xl font-bold text-center w-full md:w-auto`}>
        <a href="/">TyrePlex</a>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen
            ? "absolute top-0 left-0 h-screen bg-white flex flex-col w-[70%] gap-6 pl-6 z-10 shadow-xl"
            : "hidden md:flex gap-6 mt-4 md:mt-0"
        }`}
      >
        {/* Close Icon */}
        <div className="md:hidden cursor-pointer mt-6" onClick={toggleMenu}>
          <FaTimes size={24} />
        </div>

        <ul className="flex flex-col md:flex-row gap-5 md:mt-0">
          <li>
            <a href="#products" className="hover:text-blue-500 block">
              Tyres
            </a>
          </li>
          <li>
            <a href="#deals-in" className="hover:text-blue-500 block">
              Deals In
            </a>
          </li>
          <li>
            <a href="#services-offered" className="hover:text-blue-500 block">
              Services
            </a>
          </li>
          <li>
            <a href="#payment" className="hover:text-blue-500 block">
              Payment
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-blue-500 block">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contactus" className="hover:text-blue-500 block">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
