// src/components/HostelBoxesDisplay.jsx
import React from 'react';
import { mockHostels } from '../data/mockData';

// HostelBox component: Represents a single hostel with its details.
const HostelBox = ({ hostel }) => {
  const occupancyPercentage = ((hostel.occupied / hostel.capacity) * 100).toFixed(0);

  return (
    // On small screens, take full width (minus padding/margin).
    // On medium screens, max-width is still 1/3 or 1/4 of container.
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mb-4 mr-4 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{hostel.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{hostel.type}</p>
      <div className="text-sm text-gray-700">
        <p>Rooms: {hostel.rooms}</p>
        <p>Capacity: {hostel.capacity}</p>
        <p>Occupied: {hostel.occupied}</p>
      </div>
      <div className="mt-4 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${occupancyPercentage}%` }}
        ></div>
      </div>
      <p className="text-right text-xs text-gray-500 mt-1">{occupancyPercentage}% Occupied</p>
    </div>
  );
};

// HostelBoxesDisplay component: Renders a grid of HostelBox components.
const HostelBoxesDisplay = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md"> {/* Reduced padding for mobile */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Hostel Block</h2>
      <div className="flex flex-wrap -mr-4 justify-center sm:justify-start"> {/* Center on small screens, then align left */}
        {mockHostels.map((hostel) => (
          <HostelBox key={hostel.id} hostel={hostel} />
        ))}
      </div>
      <div className="mt-6 text-gray-700">
        <p className="text-lg font-medium">Total Hostels: {mockHostels.length}</p>
        <p className="text-lg font-medium">Total Rooms Across Blocks: {mockHostels.reduce((sum, h) => sum + h.rooms, 0)}</p>
      </div>
    </div>
  );
};

export default HostelBoxesDisplay;