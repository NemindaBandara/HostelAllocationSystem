// src/components/Sidebar.jsx
import React from 'react';
import UserAvatar from './UserAvatar'; // Make sure to import UserAvatar

// Sidebar component: Displays the logo, system title, and navigation icons.
const Sidebar = () => {
  return (
    // Outer container for the sidebar.
    // hidden on small screens, flex on medium screens and up.
    // Fixed position, full height, dark background, padding, and shadow.
    <div className="hidden md:flex fixed top-0 left-0 h-full w-20 bg-[#282828] text-gray-400 p-4 shadow-lg flex-col items-center">
      {/* Logo/System Icon */}
      <div className="mb-8 mt-4">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
          H
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center text-xs mb-6 cursor-pointer hover:text-white transition-colors duration-200">
        <i className="fas fa-chart-line text-xl mb-1"></i>
        <span>Dashboard</span>
      </div>
      <div className="flex flex-col items-center text-xs mb-6 cursor-pointer hover:text-white transition-colors duration-200">
        <i className="fas fa-building text-xl mb-1"></i>
        <span>Hostels</span>
      </div>
      <div className="flex flex-col items-center text-xs mb-6 cursor-pointer hover:text-white transition-colors duration-200">
        <i className="fas fa-user-graduate text-xl mb-1"></i>
        <span>Students</span>
      </div>
      <div className="flex flex-col items-center text-xs mb-6 cursor-pointer hover:text-white transition-colors duration-200">
        <i className="fas fa-handshake text-xl mb-1"></i>
        <span>Allocations</span>
      </div>

      {/* User profile at the bottom */}
      <div className="mt-auto mb-4">
        <UserAvatar alt="JP" size="w-10 h-10" />
      </div>
    </div>
  );
};

export default Sidebar;