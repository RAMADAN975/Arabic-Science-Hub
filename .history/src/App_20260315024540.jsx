import { useState, useEffect } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=2a308efb';

export default function App() {

  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('Action'); // قيمة افتراضية
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // // دالة جلب البيانات الاحترافية
  // const fetchMovies = async (title) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(`${API_URL}&s=${title}`);
  //     const data = await response.json();

  //     if (data.Response === 'True') {
  //       setMovies(data.Search);
  //     } else {
  //       setError(data.Error);
  //       setMovies([]);
  //     }
  //   } catch (err) {
  //     setError("فشل الاتصال بالخادم، تحقق من الإنترنت." + err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // تشغيل البحث عند فتح التطبيق لأول مرة
  // useEffect(() => {
  //   fetchMovies('Action'); // نضع كلمة افتراضية ثابتة للبداية
  // }, []);

  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("myMovies")
    return saved ? setMovies(saved) : []
  })

  const [searchTerm, setSearchTerm] = useState('Action'); // قيمة افتراضية
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="app-container">
      <h1>سينما رمضان 🎬</h1>

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={() => fetchMovies(searchTerm)}
      />

      {loading && <div className="loader">جاري البحث...</div>}
      {error && <div className="error-msg">{error}</div>}

      <div className="movies-grid">
        {!loading && !error && movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
