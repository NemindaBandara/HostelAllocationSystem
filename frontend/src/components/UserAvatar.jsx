// src/components/UserAvatar.jsx
import React, { useState } from 'react';

// UserAvatar component: Displays a circular image or initials as an avatar.
// Props:
// - src: URL of the avatar image (optional).
// - alt: Alt text for the image, also used to generate initials if src is not provided.
// - size: Tailwind class for size (e.g., 'w-8 h-8').
const UserAvatar = ({ src, alt, size = 'w-8 h-8' }) => {
  const [imageError, setImageError] = useState(false);

  // Function to get initials from a name (e.g., "John Doe" -> "JD")
  const getInitials = (name) => {
    if (!name) return '';
    const parts = name.split(' ').filter(Boolean); // Split by space and remove empty strings
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase(); // Just the first letter if only one word
    }
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  // Generate initials from the alt prop
  const initials = getInitials(alt);

  return (
    // Outer container for the avatar.
    // Flexbox for centering content, rounded, overflow hidden.
    <div className={`relative rounded-full overflow-hidden flex items-center justify-center ${size} 
      bg-gray-600 text-white text-sm font-semibold`}>
      {/* Conditionally render image or initials */}
      {(src && !imageError) ? (
        // If src is provided and no error, try to load the image
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)} // Set imageError to true on load failure
        />
      ) : (
        // If no src, or image failed to load, display initials
        <span>{initials}</span>
      )}
    </div>
  );
};

export default UserAvatar;