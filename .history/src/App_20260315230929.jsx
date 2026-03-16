import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './pages/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* الصفحة الرئيسية التي تحتوي على البحث */}
          <Route path="/" element={<Home />} />

          {/* صفحة التفاصيل وتعتمد على الـ id (imdbID) */}
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;