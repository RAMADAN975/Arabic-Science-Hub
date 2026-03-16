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

            {/* Heart button for favorites */}
            <button
                className={`fav-btn ${isFavorite ? 'active' : ''}`}
                onClick={handleFavoriteClick}
            >
                {isFavorite ? '❤️' : '🤍'}
            </button>

            {/* Movie Poster Image */}
            <img
                src={movie.Poster}
                alt={movie.Title}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150x200?text=No+Cover'; }}
            />

            {/* Movie basic info */}
            <div className="info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </Link>
    )
}
