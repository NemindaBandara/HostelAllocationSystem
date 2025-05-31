// src/components/Header.jsx
import React from 'react';
import UserAvatar from './UserAvatar';

const Header = () => {
  return (
    // Outer container for the header.
    // Dark background, padding.
    // On small screens, no left margin. On medium screens and up, apply ml-20.
    <header className="bg-[#282828] p-4 flex justify-between items-center shadow-md md:ml-0">
      {/* Left section: System Title */}
      {/* Hidden on small screens to save space, visible on medium screens and up */}
      <div className="hidden md:flex items-center">
        <h1 className="text-white text-lg font-semibold ml-4">Hostel Allocation System</h1>
      </div>
      {/* Mobile-only title/icon or hamburger menu placeholder */}
      <div className="md:hidden flex items-center">
          <i className="fas fa-bars text-gray-400 text-xl cursor-pointer mr-4"></i> {/* Hamburger icon */}
          <span className="text-white text-base font-semibold">Hostel App</span>
      </div>


      {/* Center section: Search Bar */}
      {/* Full width on small screens, 1/3 width on medium screens and up */}
      <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-full md:w-1/3 mx-4">
        <i className="fas fa-search text-gray-400 mr-2"></i>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white focus:outline-none w-full text-sm" // Added text-sm for smaller text on mobile
        />
      </div>

      {/* Right section: User Avatars and Icons */}
      {/* Reduced spacing on mobile, adjusted for responsiveness */}
      <div className="flex items-center space-x-2 md:space-x-4 mr-2 md:mr-4">
        <i className="fas fa-bell text-gray-400 text-xl cursor-pointer hover:text-white transition-colors duration-200"></i>
        <UserAvatar alt="Sudhiram" />
        {/* Hide one avatar on small screens to save space if necessary */}
        <div className="hidden md:block">
            <UserAvatar alt="John Doe" />
        </div>
      </div>
    </header>
  );
};

export default Header;