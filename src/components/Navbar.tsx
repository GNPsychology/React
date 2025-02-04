import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-900' : 'text-gray-700';
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900">GN Psychology</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-900 ${isActive('/')}`}>Home</Link>
            <Link to="/services" className={`hover:text-blue-900 ${isActive('/services')}`}>Services</Link>
            <Link to="/about" className={`hover:text-blue-900 ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`hover:text-blue-900 ${isActive('/contact')}`}>Contact</Link>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className={`block px-3 py-2 hover:text-blue-900 ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 hover:text-blue-900 ${isActive('/services')}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 hover:text-blue-900 ${isActive('/about')}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 hover:text-blue-900 ${isActive('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;