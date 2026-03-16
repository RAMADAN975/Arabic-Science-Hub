import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import MovieDetails from './components/Pages/MovieDetails';

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