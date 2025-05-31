// src/data/mockData.js

// Mock data for the available hostels (to replace the map section)
export const mockHostels = [
  {
    id: 1,
    name: "Hostel Alpha",
    type: "Male Block",
    rooms: 120,
    capacity: 480,
    occupied: 380,
  },
  {
    id: 2,
    name: "Hostel Beta",
    type: "Male Block",
    rooms: 100,
    capacity: 400,
    occupied: 320,
  },
  {
    id: 3,
    name: "Hostel Gamma",
    type: "Male Block",
    rooms: 80,
    capacity: 320,
    occupied: 250,
  },
  {
    id: 4,
    name: "Hostel Delta",
    type: "Male Block",
    rooms: 90,
    capacity: 360,
    occupied: 300,
  },
];

// Mock data for the "Available Hostels" table
export const mockAvailableHostels = [
  {
    id: 1,
    name: "Hostel Orion",
    location: "Gletrod Clumation",
    availableRooms: 15,
  },
  {
    id: 2,
    name: "Hostel Andromeda",
    location: "Pithagoras Alley",
    availableRooms: 22,
  },
  {
    id: 3,
    name: "Hostel Pegasus",
    location: "Nebula Drive",
    availableRooms: 8,
  },
  {
    id: 4,
    name: "Hostel Cygnus",
    location: "Star Light Avenue",
    availableRooms: 30,
  },
];

// Mock data for the "Allocations" panel
export const mockAllocations = [
  {
    id: 1,
    studentName: "Student Type",
    room: "B17 Rende",
    status: "Available",
  },
  { id: 2, studentName: "Student B", room: "B17 Rende", status: "Available" },
  { id: 3, studentName: "Student D", room: "B17 Rende", status: "Available" }, // Corrected 'Duxdent'
  { id: 4, studentName: "Student A", room: "B17 Rende", status: "Available" },
  { id: 5, studentName: "Student XYZ", room: "B17 Rende", status: "Available" },
  { id: 6, studentName: "Student PQR", room: "B17 Rende", status: "Available" },
];
