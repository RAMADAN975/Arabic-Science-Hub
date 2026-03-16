import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard'; // تأكد من صحة المسار حسب مجلداتك

export default function Watchlist() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // جلب الكتب المفضلة من التخزين المحلي (LocalStorage)
        const savedFavorites = JSON.parse(localStorage.getItem('watchlist')) || [];
        setFavorites(savedFavorites);
    }, []);

    const removeFromWatchlist = (id) => {
        const updatedFavorites = favorites.filter(book => book.imdbID !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('watchlist', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="watchlist-page" style={{ minHeight: '80vh', padding: '20px 8%' }}>
            <h2 style={{ textAlign: 'center', color: '#1a5f7a', marginBottom: '30px' }}>
                كتبي العلمية المفضلة 🔖
            </h2>

            {favorites.length > 0 ? (
                <div className="movies-grid">
                    {favorites.map((book) => (
                        <div key={book.imdbID} className="favorite-item">
                            <MovieCard
                                movie={book}
                                isFavorite={true}
                            />
                            <button
                                onClick={() => removeFromWatchlist(book.imdbID)}
                                className="remove-btn"
                            >
                                حذف من المفضلة
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#636e72' }}>لا توجد كتب في مفضلتك حالياً.</p>
                    <a href="/" style={{ color: '#159895', fontWeight: 'bold' }}>عد للمكتبة وأضف بعض الكتب!</a>
                </div>
            )}
        </div>
    );
}