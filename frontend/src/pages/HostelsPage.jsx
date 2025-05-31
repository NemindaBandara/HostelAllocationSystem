// src/pages/HostelsPage.jsx
import React, { useState } from 'react'; // Import useState
import { mockHostels } from '../data/mockData'; // Import mock data for hostels
import Modal from '../components/Modal'; // Import the new Modal component

// HostelsPage component: Displays a list of all hostels with management options.
const HostelsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [newHostelData, setNewHostelData] = useState({ // State for new hostel form data
    name: '',
    type: '',
    rooms: '',
    capacity: '',
    occupied: '',
    floors: '',
    roomCapacity: '',
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewHostelData({ // Reset form data when closing modal
      name: '', type: '', rooms: '', capacity: '', occupied: '', floors: '', roomCapacity: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHostelData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddHostel = (e) => {
    e.preventDefault();
    console.log('New Hostel Data:', newHostelData);
    // In a real application, you would send this data to your Django backend via an API call
    // e.g., axios.post('/api/hostels/', newHostelData)
    // For now, we'll just log it and close the modal.

    // OPTIONAL: Add to mockHostels for temporary frontend display (not persisted)
    // const newId = mockHostels.length > 0 ? Math.max(...mockHostels.map(h => h.id)) + 1 : 1;
    // mockHostels.push({ ...newHostelData, id: newId, rooms: parseInt(newHostelData.rooms), /* parse other numbers */ });
    // This requires a useState for mockHostels itself and a shallow copy.
    // For a simple demo, just logging is fine.

    handleCloseModal(); // Close modal after submission (or after successful API call)
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Hostels</h2>

      {/* Top section for Add Hostel button and search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleOpenModal} // Add onClick handler
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors duration-200 w-full sm:w-auto"
        >
          <i className="fas fa-plus mr-2"></i> Add New Hostel
        </button>
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search hostels..."
            className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      {/* Hostels Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 text-left">
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Hostel Name</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Type</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Rooms</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Capacity</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Occupied</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Floors</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Room Cap.</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockHostels.map((hostel) => (
              <tr key={hostel.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">{hostel.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.type}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.rooms}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.capacity}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.occupied}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.floors}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{hostel.roomCapacity}</td>
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

      {/* New Hostel Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Add New Hostel">
        <form onSubmit={handleAddHostel} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Hostel Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newHostelData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type (e.g., Male Block, Female Block)</label>
            <input
              type="text"
              name="type"
              id="type"
              value={newHostelData.type}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="floors" className="block text-sm font-medium text-gray-700">Number of Floors</label>
            <input
              type="number"
              name="floors"
              id="floors"
              value={newHostelData.floors}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              min="1"
              required
            />
          </div>
          <div>
            <label htmlFor="roomCapacity" className="block text-sm font-medium text-gray-700">Students per Room</label>
            <input
              type="number"
              name="roomCapacity"
              id="roomCapacity"
              value={newHostelData.roomCapacity}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              min="1"
              required
            />
          </div>
          {/* Note: rooms, capacity, occupied would ideally be calculated or managed by backend */}
          {/* For now, we'll omit them from direct input in this basic form. */}
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Add Hostel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default HostelsPage;