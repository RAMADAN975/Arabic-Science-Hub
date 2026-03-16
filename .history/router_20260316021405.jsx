import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

// الطريقة الحديثة في React Router (Data Router)
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movie/:id",
        element: <MovieDetails />,
    },
]);

export default router;