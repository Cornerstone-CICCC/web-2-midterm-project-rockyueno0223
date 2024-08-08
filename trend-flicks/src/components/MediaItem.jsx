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
        <div className="bg-white rounded-md shadow-lg p-6 relative w-4/5 max-w-lg transform transition-all duration-300 scale-0 show-modal-animation">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-xl font-bold">
            {isMovie ? media.title : media.name}
          </h2>
          <div className='w-full flex justify-between px-4'>
            <span>
              {isMovie ? media.release_date.substring(0, 4) : media.first_air_date.substring(0, 4)}
            </span>
            <span>
              {media.media_type}
            </span>
          </div>
          <p>{media.overview ? media.overview : "No text available"}</p>
          <div className='w-full flex justify-between px-4'>
            <span>
            </span>
            <span>
              Popularity: {Math.round(media.popularity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaItem
