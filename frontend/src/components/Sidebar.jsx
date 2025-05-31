// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import UserAvatar from './UserAvatar';

// Sidebar component: Displays the logo, system title, and navigation icons.
const Sidebar = () => {
  const location = useLocation(); // Hook to get current route location

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden md:flex fixed top-0 left-0 h-full w-20 bg-[#282828] text-gray-400 p-4 shadow-lg flex-col items-center">
      {/* Logo/System Icon */}
      <div className="mb-8 mt-4">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
          H
        </div>
      </div>

      {/* Navigation Items */}
      {/* Use Link component for navigation. Add active styles based on current path. */}
      <Link to="/" className={`flex flex-col items-center text-xs mb-6 cursor-pointer transition-colors duration-200 ${isActive('/') ? 'text-white' : 'hover:text-white'}`}>
        <i className="fas fa-chart-line text-xl mb-1"></i>
        <span>Dashboard</span>
      </Link>
      <Link to="/hostels" className={`flex flex-col items-center text-xs mb-6 cursor-pointer transition-colors duration-200 ${isActive('/hostels') ? 'text-white' : 'hover:text-white'}`}>
        <i className="fas fa-building text-xl mb-1"></i>
        <span>Hostels</span>
      </Link>
      <Link to="/students" className={`flex flex-col items-center text-xs mb-6 cursor-pointer transition-colors duration-200 ${isActive('/students') ? 'text-white' : 'hover:text-white'}`}>
        <i className="fas fa-user-graduate text-xl mb-1"></i>
        <span>Students</span>
      </Link>
      <Link to="/allocations" className={`flex flex-col items-center text-xs mb-6 cursor-pointer transition-colors duration-200 ${isActive('/allocations') ? 'text-white' : 'hover:text-white'}`}>
        <i className="fas fa-handshake text-xl mb-1"></i>
        <span>Allocations</span>
      </Link>

      {/* User profile at the bottom */}
      <div className="mt-auto mb-4">
        <UserAvatar alt="JP" size="w-10 h-10" />
      </div>
    </div>
  );
};

export default Sidebar;