import { createBrowserRouter } from "react-router-dom";
import Home from "./src/components/Pages/Home";
import Layout from "./src/components/Layout";
import Watchlist from "./src/components/Pages/Watchlist";
import MovieDetails from "./src/components/Pages/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                // أضفنا النجمة هنا لكي يقبل أي مسار بعد كلمة movie
                // مثل movie/works/OL12345W
                path: "/movie/*",
                element: <MovieDetails />,
            },
            {
                path: "/Watchlist",
                element: <Watchlist />,
            },
        ]
    }
])

export default router