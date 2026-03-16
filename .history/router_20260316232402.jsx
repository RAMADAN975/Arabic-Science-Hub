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