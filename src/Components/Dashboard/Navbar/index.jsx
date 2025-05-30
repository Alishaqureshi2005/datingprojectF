// Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiBell, FiMenu, FiX } from 'react-icons/fi';
import { motion } from "motion/react"
import { ContextApi } from '../../../helper/ContextApi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/dashboard/", label: 'Home' },
    { path: "/dashboard/friends", label: 'Friends' },
    { path: "/dashboard/events", label: 'Events' },
    { path: "/dashboard/groups", label: 'Groups' },
  ];

  const isActive = (path) => location.pathname === path;
const { profileData} = useContext(ContextApi);
  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">MySite</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${
                isActive(link.path)
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <FiSearch className="text-gray-500 hover:text-blue-500 cursor-pointer" size={20} />
          <FiBell className="text-gray-500 hover:text-blue-500 cursor-pointer" size={20} />
          <Link to="/dashboard/profile">
          <img
            src={profileData?.profilePic||"https://i.pravatar.cc/32"}
            alt="profile"
            className="rounded-full h-8 w-8 object-cover cursor-pointer"
          />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isActive(link.path)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
