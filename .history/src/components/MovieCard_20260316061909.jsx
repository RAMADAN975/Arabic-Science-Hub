// import { Link } from 'react-router-dom';

// // This component displays an individual movie card with its details and favorite toggle
// const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {

//     // Function to handle clicking the heart button without navigating to details
// Stop the link from opening the details page
// Call the function passed from parent to add/remove
//     const handleFavoriteClick = (e) => {
//         e.preventDefault(); // Function to handle clicking the heart button without navigating to details
// Stop the link from opening the details page
// Call the function passed from parent to add/remove
//         onToggleFavorite(movie); // Function to handle clicking the heart button without navigating to details
// Stop the link from opening the details page
// Call the function passed from parent to add/remove
//     };

//     return (
//         // Link to the specific movie details page using its ID
//         <Link to={`/movie/${movie.imdbID}`} className="movie-card">

//             {/* Heart button for favorites */}
//             <button
//                 className={`fav-btn ${isFavorite ? 'active' : ''}`}
//                 onClick={handleFavoriteClick}
//             >
//                 {isFavorite ? '❤️' : '🤍'}
//             </button>

//             {/* Movie Poster Image */}
//             <img
//                 src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
//                 alt={movie.Title}
//             />

//             {/* Movie basic info */}
//             <div className="movie-info">
//                 <h3>{movie.Title}</h3>
//                 <p>{movie.Year}</p>
//             </div>
//         </Link>
//     );
// };

// export default MovieCard;

import React from "react";
import { Link } from "react-router-dom";

// This component displays an individual movie card with its details and favorite toggle
export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {

    // Function to handle clicking the heart button without navigating to details
    const handleFavoriteClick = (e) => {
        // Stop the link from opening the details page
        e.preventDefault()
        // Call the function passed from parent to add/remove
        onToggleFavorite(movie)
    }

    return (
        // Link to the specific movie details page using its ID
        <Link to={`/movie/${movie.imdbID}`} className="movie-card">

        </Link>
    )
}
