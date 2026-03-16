import { createBrowserRouter } from 'react-router-dom';
import Home from './src/components/Pages/Home';
import MovieDetails from './src/components/Pages/MovieDetails';

// // الطريقة الحديثة في React Router (Data Router)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <MovieDetails />,
    }
])

export default router;