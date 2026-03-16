


import React, { useEffect, useState } from "react";

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
        <div>

        </div>
    )
}