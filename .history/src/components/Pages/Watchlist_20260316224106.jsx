import { useEffect, useState } from "react";
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
                    {myMovies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            isFavorite={true}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
