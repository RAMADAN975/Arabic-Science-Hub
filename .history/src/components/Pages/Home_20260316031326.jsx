import { useState, useEffect } from 'react';
import Search from '../Search'
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

export default function Home() {
    // const [movies, setMovies] = useState(() => {
    //     const saved = localStorage.getItem("myMovies");
    //     return saved ? JSON.parse(saved) : [];
    // });
    // const [searchTerm, setSearchTerm] = useState('Action');
    // const [loading, setLoading] = useState(false);

    // const fetchMovies = async (title) => {
    //     setLoading(true);
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     if (data.Response === "True") {
    //         setMovies(data.Search);
    //         localStorage.setItem("myMovies", JSON.stringify(data.Search));
    //     }
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     if (movies.length === 0) {
    //         fetchMovies('Action');
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []); // نتركها فارغة لأننا نريدها أن تعمل "مرة واحدة فقط" عند البداية

    const [movies, setMovies] = useState(() => {
        const saved = localStorage.getItem("myMovie")
        return saved ? JSON.parse(saved) : []
    })

    const [searchTerm, setSearchTerm] = useState("Action")
    const [loading, setLoading] = useState(false)

    const fetchMovies = async (title) => {
        setLoading(true)
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

        if (data.Response) {
            setMovies(data.Search)
            localStorage.setItem("myMovies", JSON.stringify(data.Search))
        }
        setLoading(false)
    }

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies('Action');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // نتركها فارغة لأننا نريدها أن تعمل "مرة واحدة فقط" عند البداية

    return (
        <>
            <h1>سينما رمضان 🎬</h1>
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={() => fetchMovies(searchTerm)}
            />
            <div className='movies-grid'>
                {loading ? <div className='loader'>جاري البحث...</div> :
                    movies.map((movie) => <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                    />
                    )
                }
            </div>
        </>
    );
}