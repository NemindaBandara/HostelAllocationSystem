// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HostelBoxesDisplay from './components/HostelBoxesDisplay';
import AvailableHostelsTable from './components/AvailableHostelsTable';
import AllocationPanel from './components/AllocationPanel';

const App = () => {
  return (
    // Main container for the entire application.
    // On small screens, flex-col (stacks vertically). On medium screens and up, flex-row.
    // Sets a min-h-screen to ensure full height for background.
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar component (hidden on mobile, visible on md: and up) */}
      <Sidebar />

      {/* Main content area. Flex column to stack header and content below. */}
      {/* On small screens, no left margin. On medium screens and up, apply ml-20. */}
      <div className="flex-1 flex flex-col md:ml-20">
        {/* Header component */}
        <Header />

        {/* Content below the header.
            On small screens, flex-col (stacks vertically). On medium screens and up, flex-row.
            Padding and spacing adjusted for mobile. */}
        <div className="flex-1 flex flex-col md:flex-row p-4 md:p-6 space-y-6 md:space-y-0 md:space-x-6">
          {/* Left section: Hostel information and available hostels table.
              Flex column to stack components.
              Takes full width on small screens, then adjusts on md: and up. */}
          <div className="flex flex-col w-full md:flex-[3]">
            <HostelBoxesDisplay />
            <AvailableHostelsTable />
          </div>

          {/* Right section: Allocation panel.
              Takes full width on small screens, then adjusts on md: and up. */}
          <div className="w-full md:flex-[1] flex justify-center md:block"> {/* Centered on mobile */}
            <AllocationPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;