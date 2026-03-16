// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// const MovieDetails = () => {
//     // 1. Get the movie ID from the URL link
//     const { id } = useParams();

//     // 2. State to store the specific movie details
//     const [movie, setMovie] = useState(null);

//     // 3. Fetch movie data from API when the page opens
//     useEffect(() => {
//         const fetchDetails = async () => {
//             const res = await fetch(`https://www.omdbapi.com/?apikey=2a308efb&i=${id}&plot=full`);
//             const data = await res.json();
//             setMovie(data);
//         };
//         fetchDetails();
//     }, [id]);

//     // 4. If data is still loading, show this message
//     if (!movie) return <div>جاري تحميل التفاصيل...</div>;

//     return (
//         <div className="movie-details">
//             <img src={movie.Poster} alt={movie.Title} />
//             <div className="details-info">
//                 <h1>{movie.Title}</h1>
//                 <p><strong>القصة:</strong> {movie.Plot}</p>
//                 <p><strong>الممثلين:</strong> {movie.Actors}</p>
//                 <p><strong>التقييم:</strong> {movie.imdbRating}</p>
//             </div>
//         </div>
//     );
// };

// export default MovieDetails;


export default function MovieDetails() {

    // 1. Get the movie ID from the URL link
    const [id] = useParams()
    // 2. State to store the specific movie details
    const [movie, setMovie] = useState(null)

    // 3. Fetch movie data from API when the page opens
    useEffect(() => {
        const fetchDetails = async () => {
            const res = await fetch(`https://www.omdbapi.com/?apikey=2a308efb&i=${id}&plot=full`);
            const data = res.json()
            setMovie(data)
        }
        fetchDetails();
    }, [id])

    // 4. If data is still loading, show this message
    if (!movie) return <div>جاري تحميل التفاصيل...</div>;

    return (
        <div className="movie-details">
            <img src={movie.Poster} alt="" />
        </div>
    )
}
