// import { useState } from 'react';

// // This component handles the search input from the user
// const Search = ({ onSearch }) => {
//     // Local state to store the text being typed by the user
//     const [term, setTerm] = useState('');

//     // Function to handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent page reload (Standard Level 2 JS)
//         if (term.trim()) {
//             onSearch(term); // Send the search term to the parent component (Home)
//         }
//     };

//     return (
//         <section className="search-section">
//             {/* Search Form */}
//             <form onSubmit={handleSubmit} className="search-form">
//                 <input
//                     type="text"
//                     placeholder="ابحث عن فيلمك المفضل..."
//                     value={term}
//                     // Update local state as the user types
//                     onChange={(e) => setTerm(e.target.value)}
//                 />
//                 <button type="submit">بحث</button>
//             </form>
//         </section>
//     );
// };

// export default Search;

import React, { useState } from "react";
// This component handles the search input from the user
export default function Search({ onSearch }) {

    // Local state to store the text being typed by the user
    const [term, setTerm] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload (Standard Level 2 JS)
        if (term.trim()) {
            onSearch(term); // Send the search term to the parent component (Home)
        }
    };
    return (
        <div>

        </div>
    )
}
