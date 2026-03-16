import React from 'react';

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="ابحث عن أفلام..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>بحث</button>
        </div>
    );
};

export default Search;