// استيراد useState و useEffect ضروري جداً لحل الخطأ الظاهر في صورك
import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';

export default function Watchlist() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // جلب الكتب المخزنة في المتصفح
        const savedFavorites = JSON.parse(localStorage.getItem('watchlist')) || [];
        setFavorites(savedFavorites);
    }, []);

    const removeFromWatchlist = (id) => {
        const updatedFavorites = favorites.filter(book => book.imdbID !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('watchlist', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="watchlist-page">
            <h2 className="page-title">كتبي العلمية المفضلة 🔖</h2>

            {favorites.length > 0 ? (
                <div className="movies-grid">
                    {favorites.map((book) => (
                        <div key={book.imdbID} className="book-card-container">
                            <MovieCard
                                movie={book}
                                isFavorite={true}
                            />
                            <button
                                onClick={() => removeFromWatchlist(book.imdbID)}
                                className="remove-btn"
                            >
                                حذف من القائمة
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-message">
                    <p>قائمة مفضلتك فارغة حالياً.</p>
                    <a href="/" className="back-link">اكتشف الكتب العلمية الآن</a>
                </div>
            )}
        </div>
    );
}