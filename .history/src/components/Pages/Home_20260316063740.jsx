// import { useState, useEffect } from 'react';
// import MovieCard from '../MovieCard';
// import Search from '../Search';

// // API Configuration
// const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

// const Home = () => {
//     // State for storing movies from API
//     const [movies, setMovies] = useState([]);
//     // State for handling loading status
//     const [loading, setLoading] = useState(false);
//     // State for managing the watchlist (Favorites)
//     const [watchlist, setWatchlist] = useState([]);

//     // Load watchlist from LocalStorage when the component starts
//     useEffect(() => {
//         const savedData = JSON.parse(localStorage.getItem('watchlist')) || [];
//         setWatchlist(savedData);
//     }, []);

//     // Main function to fetch movies based on search term
//     const searchMovies = async (title) => {
//         setLoading(true); // Start loading
//         const response = await fetch(`${API_URL}&s=${title}`);
//         const data = await response.json();

//         if (data.Search) {
//             setMovies(data.Search); // Save results if found
//         }
//         setLoading(false); // Stop loading
//     };

//     // Function to add or remove movies from the watchlist
//     const toggleFavorite = (movie) => {
//         let updatedList;
//         const isExist = watchlist.find((m) => m.imdbID === movie.imdbID);

//         if (isExist) {
//             // If movie exists, remove it (Filter Level 2 JS)
//             updatedList = watchlist.filter((m) => m.imdbID !== movie.imdbID);
//         } else {
//             // If movie doesn't exist, add it (Spread Operator Level 2 JS)
//             updatedList = [...watchlist, movie];
//         }

//         setWatchlist(updatedList); // Update state
//         localStorage.setItem('watchlist', JSON.stringify(updatedList)); // Save to memory
//     };

//     return (
//         <div className="home-page">
//             {/* Search Component - Level 3 Data Passing */}
//             <Search onSearch={searchMovies} />

//             {/* Display loading message or the movies grid */}
//             {loading ? (
//                 <div className="loader">جاري البحث...</div>
//             ) : (
//                 <div className="movies-grid">
//                     {movies.map((movie) => (
//                         <MovieCard
//                             key={movie.imdbID}
//                             movie={movie}
//                             onToggleFavorite={toggleFavorite}
//                             // Check if this movie is already in favorites
//                             isFavorite={watchlist.some(m => m.imdbID === movie.imdbID)}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Home;

import React, { useState } from "react";

// API Configuration
const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

export default function Home() {

    const [movies, setMovies] = useState('')

    return (
        <div>

        </div>
    )
}
