// src/components/AvailableHostelsTable.jsx
import React from 'react';
import { mockAvailableHostels } from '../data/mockData';

const AvailableHostelsTable = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md mt-4 sm:mt-6"> {/* Adjusted padding and margin */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Hostel</h2>

      {/* Added overflow-x-auto to make table horizontally scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[500px]"> {/* Added a min-width to force horizontal scroll */}
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Hostel Name</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Location</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Available Rooms</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {mockAvailableHostels.map((hostel) => (
              <tr key={hostel.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">{hostel.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.location}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{hostel.availableRooms} rooms</td>
                <td className="py-3 px-4 text-right">
                  <i className="fas fa-chevron-right text-gray-400 cursor-pointer hover:text-blue-500"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableHostelsTable;