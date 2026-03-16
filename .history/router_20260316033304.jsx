// import { createBrowserRouter } from 'react-router-dom';
// // استيراد الصفحات (سنقوم بإنشائها في الخطوات القادمة)
// import Home from './pages/Home';
// import MovieDetails from './pages/MovieDetails';
// import Watchlist from './pages/Watchlist';
// import Layout from './components/Layout'; // هذا المكون سيحتوي على الـ Navbar

import { createBrowserRouter } from "react-router-dom";
import Home from "./src/components/Pages/Home";
import Layout from "./src/components/Layout";
import Watchlist from "./src/components/Pages/Watchlist";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />, // الـ Layout يضمن ظهور الـ Navbar في كل الصفحات
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/movie/:id",
//                 element: <MovieDetails />,
//             },
//             {
//                 path: "/watchlist",
//                 element: <Watchlist />,
//             },
//         ],
//     },
// ]);

// export default router;

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
                path: "/",
                element: <Layout />,
            },
            {
                path: "/",
                element: <Watchlist />,
            },
        ]
    }
])