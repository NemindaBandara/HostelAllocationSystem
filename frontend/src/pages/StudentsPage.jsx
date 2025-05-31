// src/pages/StudentsPage.jsx
import React from 'react';
import { mockStudents } from '../data/mockData'; // Import mock data for students

// StudentsPage component: Displays a list of all students with management options.
const StudentsPage = () => {
  return (
    // Main container for the students page.
    // Padding, background, rounded corners, shadow.
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Students</h2>

      {/* Top section for Register Student button and search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors duration-200 w-full sm:w-auto">
          <i className="fas fa-user-plus mr-2"></i> Register New Student
        </button>
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search students..."
            className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 text-left">
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Student ID</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Name</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Faculty</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Batch</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Allocated Room</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">{student.id}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{student.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{student.faculty}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{student.batch}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{student.room}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    student.allocated ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.allocated ? 'Allocated' : 'Unallocated'}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <i className="fas fa-trash-alt"></i>
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

export default StudentsPage;