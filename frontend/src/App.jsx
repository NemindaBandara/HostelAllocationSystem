// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage'; // Import new page components
import HostelsPage from './pages/HostelsPage';
import StudentsPage from './pages/StudentsPage';
import AllocationsPage from './pages/AllocationsPage';

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

        {/* Routes configuration */}
        <Routes>
          {/* Dashboard Page - default route */}
          <Route path="/" element={<DashboardPage />} />
          {/* Hostels Management Page */}
          <Route path="/hostels" element={<HostelsPage />} />
          {/* Students Management Page */}
          <Route path="/students" element={<StudentsPage />} />
          {/* Allocations Management Page */}
          <Route path="/allocations" element={<AllocationsPage />} />
          {/* Fallback for unknown routes (optional) */}
          <Route path="*" element={<h1 className="p-6 text-2xl text-gray-700">404: Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;