// src/components/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if not open

  // Use ReactDOM.createPortal to render the modal outside the main DOM tree,
  // typically directly under <body>, to avoid z-index issues.
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out scale-95 opacity-0 animate-scale-in">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
        
        {/* Modal Body (children passed to the Modal) */}
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') || document.body // Render into a specific 'modal-root' div or directly into body
  );
};

export default Modal;