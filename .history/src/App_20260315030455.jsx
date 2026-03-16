import { useState, useEffect } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

export default function App() {

  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("myMovies")
    return saved ? JSON.parse(saved) : []; // نستخدم JSON.parse لأن البيانات مخزنة كنص
  })

  const [searchTerm, setSearchTerm] = useState('Action'); // قيمة افتراضية
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    localStorage.setItem("myMovies", JSON.stringify(movies))
  }, [movies])


  const fetchMovies = async (title) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search)
      } else {
        setError(data.Error)
        setMovies([])
      }
    } catch (err) {
      setError("فشل الاتصال بالخادم، تحقق من الإنترنت." + err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies('Action'); // نضع كلمة افتراضية ثابتة للبداية
  })
  return (
    <div className='container'>
      <h1>سينما رمضان 🎬</h1>

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={() => fetchMovies(searchTerm)}
      />

      {loading && <div className='loader'>جاري البحث...</div>}
      {error && <div className='error-msg'>{error}</div>}

      <div className='movies-card'>
        {!loading && !error && movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
