// import { useState, useEffect } from 'react';
// import MovieCard from '../MovieCard';

// const Watchlist = () => {
//     // State to store the movies we get from memory
//     const [myMovies, setMyMovies] = useState([]);

//     // Get data from LocalStorage as soon as the page loads
//     useEffect(() => {
//         // Step 1: Get the string data from memory
//         const data = localStorage.getItem('watchlist');

//         // Step 2: If there is data, convert it from text to a JavaScript array
//         if (data) {
//             setMyMovies(JSON.parse(data));
//         }
//     }, []);

//     return (
//         <div className="watchlist-page">
//             <h1 style={{ textAlign: 'center' }}>قائمة مفضلاتي ❤️</h1>

//             {/* If the list is empty, show a message. Otherwise, show the grid */}
//             {myMovies.length === 0 ? (
//                 <p style={{ textAlign: 'center' }}>قائمة المفضلات فارغة حالياً.</p>
//             ) : (
//                 <div className="movies-grid">
//                     {myMovies.map((movie) => (
//                         <MovieCard key={movie.imdbID} movie={movie} isFavorite={true} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Watchlist;

import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

export default function Watchlist() {

    // State to store the movies we get from memory
    const [myMovies, setMyMovies] = useState([])

    // Get data from LocalStorage as soon as the page loads
    useEffect(() => {
        const data = localStorage.getItem('watchlist')
        if (data) {
            setMyMovies(JSON.parse(data))
        }
    }, [])

    return (
        <div className="watchlist-page">
            <h1 style={{ textAlign: 'center' }}>قائمة مفضلاتي ❤️</h1>

            {/* If the list is empty, show a message. Otherwise, show the grid */}
            {myMovies.length === 0 ? (
                <p style={{ textAlign: 'center' }}>قائمة المفضلات فارغة حالياً.</p>
            ) : (
                <div className="movies-grid">
                    {myMovies.map((movie) => {
                        <MovieCard
                            key={movie}
                            movie={movie}
                        />
                    })}
                </div>
            )}
        </div>
    )
}
