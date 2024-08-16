import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar bg-gray-800  shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white">
              Hope Consultancy
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="nav-links">
            <div className="ml-10 flex space-x-4">
              <a
                href="#home"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-blue-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu transition-transform duration-300 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="px-3 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            onClick={handleNavLinkClick}
            className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleNavLinkClick}
            className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={handleNavLinkClick}
            className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={handleNavLinkClick}
            className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
