import React, { useEffect } from 'react'
import "../css/modal.css";

const MediaItem = ({ isOpen, onClose, media }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal-overlay') {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const isMovie = media.media_type === "movie";

  return (
    <div>
      <div id="modal-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white rounded-md shadow-lg p-6 relative w-1/3 max-w-lg transform transition-all duration-300 scale-0 show-modal-animation">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-xl font-bold">
            {isMovie ? media.title : media.name}
          </h2>
          <p>{media.overview ? media.overview : "No text available"}</p>
        </div>
      </div>
    </div>
  )
}

export default MediaItem
