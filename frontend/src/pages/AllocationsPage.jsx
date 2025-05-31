// src/pages/AllocationsPage.jsx
import React from 'react';
import { mockAllocations, mockStudents, mockHostels } from '../data/mockData'; // Import all relevant mock data

// AllocationsPage component: Provides a detailed view for managing student allocations.
const AllocationsPage = () => {
  // Combine mock data for a richer allocation view
  const detailedAllocations = mockAllocations.map(alloc => {
    const student = mockStudents.find(s => s.room === alloc.room) || {}; // Find student by room
    const hostelName = alloc.room.split(' - ')[0]; // Extract hostel name from room string
    const hostel = mockHostels.find(h => h.name === hostelName) || {};

    return {
      ...alloc,
      studentId: student.id || 'N/A',
      faculty: student.faculty || 'N/A',
      batch: student.batch || 'N/A',
      hostelName: hostel.name || 'N/A',
      floorNumber: alloc.room.split(' ')[1] ? alloc.room.split(' ')[1].slice(0, -3) : 'N/A' // e.g., 'B17 Rende' -> 'B17'
    };
  });

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Allocations</h2>

      {/* Top section for New Allocation button and search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors duration-200 w-full sm:w-auto">
          <i className="fas fa-plus mr-2"></i> New Allocation
        </button>
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search allocations..."
            className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      {/* Allocations Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 text-left">
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Student ID</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Student Name</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Faculty</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Batch</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Hostel</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Room</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {detailedAllocations.map((allocation) => (
              <tr key={allocation.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">{allocation.studentId}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{allocation.studentName}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{allocation.faculty}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{allocation.batch}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{allocation.hostelName}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{allocation.room}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    allocation.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' // Using Available as a placeholder status
                  }`}>
                    {allocation.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fas fa-info-circle"></i> {/* View/Details icon */}
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <i className="fas fa-times-circle"></i> {/* Deallocate icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllocationsPage;