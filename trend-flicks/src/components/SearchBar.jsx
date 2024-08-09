import React, { useState } from 'react';

const SearchBar = ({ onSearch, fullWidth = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    const keywords = inputValue.trim().split(/\s+/).join('%20');
    onSearch(keywords);
  };

  return (
    <div className={`flex items-center space-x-2 ${fullWidth ? 'w-full' : ''}`}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
        className="px-2 py-1 rounded bg-gray-700 text-white flex-grow"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
