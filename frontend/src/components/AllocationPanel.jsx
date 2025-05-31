// src/components/AllocationPanel.jsx
import React from 'react';
import { mockAllocations } from '../data/mockData';

const AllocationItem = ({ allocation }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
      <div>
        <p className="text-gray-800 font-medium">{allocation.studentName}</p>
        <p className="text-sm text-gray-500">{allocation.room}</p>
      </div>
      <div className="flex items-center space-x-2">
        {allocation.status === "Available" && (
          <i className="fas fa-check-circle text-green-500 text-lg"></i>
        )}
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors duration-200">
          Click Room
        </button>
      </div>
    </div>
  );
};

const AllocationPanel = () => {
  return (
    // Full width on small screens, fixed width on medium screens and up.
    // Removed min-w-[320px] for mobile flexibility.
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full md:w-80">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Allocations</h2>

      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-3">Allocation Tags</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            All Students
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Unallocated
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Batch 2023
          </span>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Filter by Student ID or Name..."
            className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <i className="fas fa-filter absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Reference Number"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-2">
          <span>Available Rooms</span>
          <span className="text-gray-500">12</span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-2">
          <span>Total Students</span>
          <span className="text-gray-500">{mockAllocations.length}</span>
        </div>
      </div>

      <div className="max-h-[400px] md:max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"> {/* Adjusted max-height for mobile */}
        {mockAllocations.map((allocation) => (
          <AllocationItem key={allocation.id} allocation={allocation} />
        ))}
      </div>
    </div>
  );
};

export default AllocationPanel;