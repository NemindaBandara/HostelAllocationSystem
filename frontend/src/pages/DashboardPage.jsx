// src/pages/DashboardPage.jsx
import React from 'react';
import HostelBoxesDisplay from '../components/HostelBoxesDisplay';
import AvailableHostelsTable from '../components/AvailableHostelsTable';
import AllocationPanel from '../components/AllocationPanel';

// DashboardPage component: Displays the main overview of the hostel system.
// It combines the HostelBoxesDisplay, AvailableHostelsTable, and AllocationPanel.
const DashboardPage = () => {
  return (
    // Main content area for the dashboard.
    // Flex container to arrange the left section (hostels) and right section (allocations).
    // On small screens, stacks vertically. On medium screens and up, uses a row layout.
    // Padding and spacing adjusted for mobile responsiveness.
    <div className="flex-1 flex flex-col md:flex-row p-4 md:p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left section: Hostel information and available hostels table.
          Flex column to stack components.
          Takes full width on small screens, then adjusts on md: and up. */}
      <div className="flex flex-col w-full md:flex-[2]">
        <HostelBoxesDisplay />
        <AvailableHostelsTable />
      </div>

      {/* Right section: Allocation panel.
          Takes full width on small screens, then adjusts on md: and up.
          Centered on mobile, block alignment on desktop. */}
      <div className="w-full md:flex-[1] flex justify-center md:block">
        <AllocationPanel />
      </div>
    </div>
  );
};

export default DashboardPage;