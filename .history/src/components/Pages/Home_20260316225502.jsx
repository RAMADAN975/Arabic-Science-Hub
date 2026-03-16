import { useState } from "react";
import Search from "../Search";
import MovieCard from "../MovieCard"; // سنغير الاسم لاحقاً لـ BookCard

export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchBooks = async (query) => {
        setLoading(true);
        // البحث عن الكتب العلمية فقط بإضافة subject:science
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:science&maxResults=20`);
        const data = await response.json();

        if (data.items) {
            // تنظيف البيانات لتناسب تصميمنا
            const formattedBooks = data.items.map(item => ({
                imdbID: item.id,
                Title: item.volumeInfo.title,
                Year: item.volumeInfo.publishedDate,
                Poster: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
                Authors: item.volumeInfo.authors?.join(', ') || 'مؤلف غير معروف'
            }));
            setBooks(formattedBooks);
        }
        setLoading(false);
    };

    return (
        <div className="home-page">
            <Search onSearch={searchBooks} />
            {loading ? (
                <div className="loader">جاري تصفح المكتبة...</div>
            ) : (
                <div className="movies-grid">
                    {books.map((book) => (
                        <MovieCard
                            key={book.imdbID}
                            movie={book}
                            isFavorite={false} // سنفعلها لاحقاً
                        />
                    ))}
                </div>
            )}
        </div>
    );
}