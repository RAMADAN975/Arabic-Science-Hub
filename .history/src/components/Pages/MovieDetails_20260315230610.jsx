import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

export default function MovieDetails() {
    const { id } = useParams(); // التقاط رقم الهوية من الرابط
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            const response = await fetch(`${API_URL}&i=${id}&plot=full`);
            const data = await response.json();
            setMovie(data);
        };
        fetchDetail();
    }, [id]);

    if (!movie) return <div className="loader">جاري تحميل التفاصيل...</div>;

    return (
        <div className="movie-detail-page">
            <button onClick={() => navigate(-1)}>رجوع</button>
            <div className="detail-content">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="text-info">
                    <h2>{movie.Title}</h2>
                    <p><strong>القصة:</strong> {movie.Plot}</p>
                    <p><strong>الممثلين:</strong> {movie.Actors}</p>
                    <p><strong>التقييم:</strong> ⭐ {movie.imdbRating}</p>
                    <p><strong>سنة الإنتاج:</strong> {movie.Year}</p>
                </div>
            </div>
        </div>
    );
}