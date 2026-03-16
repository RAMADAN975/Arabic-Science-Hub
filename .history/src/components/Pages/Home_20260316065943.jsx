


import React, { useEffect, useState } from "react";
import Search from "../Search";
import MovieCard from "../MovieCard";

// API Configuration
const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

export default function Home() {

    // State for storing movies from API
    const [movies, setMovies] = useState([]);
    // State for handling loading status
    const [loading, setLoading] = useState(false);
    // State for managing the watchlist (Favorites)
    const [watchlist, setWatchlist] = useState([]);

    // Load watchlist from LocalStorage when the component starts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchlist(savedData);
    }, []);

    // Main function to fetch movies based on search term
    const searchMovies = async (title) => {
        setLoading(true); // Start loading
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search); // Save results if found
        }
        setLoading(false); // Stop loading
    };

    // Function to handle adding or removing favorites
    const toggleFavorite = (movie) => {
        let updatedList
        const isExist = watchlist.find((m) => m.imdbID === movie.imdbID)

        if (isExist) {
            updatedList = watchlist.filter((m) => m.imdbID !== movie.imdbID)
        } else {
            updatedList = [...watchlist, movie]
        }

        setWatchlist(updatedList)
        localStorage.setItem("watchlist", JSON.stringify(updatedList))
    }

    return (
        // The main container for the home page
        <div className="home-page">
            {/* Display the search component and pass the search function  */}
            <Search onSearch={searchMovies} />

            {/* Conditional Rendering: Show loader or the movies grid */}
            {loading ? (
                <div className="loader">جاري البحث...</div>
            ) : (
                <div className="movies-grid">

                    {/* Loop through the movies array and render a card for each movie */}
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie}
                            movie={movie}
                            onToggleFavorite={toggleFavorite}
                            // Check if the movie exists in the watchlist to color the heart
                            isFavorite={watchlist.some(m => m.imdbID === movie.imdbID)}
                        />
                    ))}
                </div>
            )
            }
        </div>
    )
}