import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* الصفحة الرئيسية */}
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* صفحة التفاصيل */}
      </Routes>
    </Router>
  );
}