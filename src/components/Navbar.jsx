import React, { useState } from 'react';
import Logo from '../assets/Logo.png'; // Adjust path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={Logo} 
              alt="Codify Institute" 
              className="h-11 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-10 text-[15px] font-medium">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#courses" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Courses
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="#placement" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Placement
            </a>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 active:scale-95"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white">
            <div className="flex flex-col gap-y-6 text-center text-lg font-medium">
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-1">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-1">About</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 py-1">Courses</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-1">Contact Us</a>
              <a href="#placement" className="text-gray-700 hover:text-blue-600 py-1">Placement</a>
              
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;