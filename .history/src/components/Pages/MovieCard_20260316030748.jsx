import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.imdbID}`} className='movie-card-link'>
            <div className='movie-card'>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title} />
                <div className="info">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;