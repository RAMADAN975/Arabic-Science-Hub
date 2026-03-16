import { useState } from "react";
import Search from "../Search";
import MovieCard from "../MovieCard";

export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchBooks = async (query) => {
        if (!query) return; // منع البحث إذا كان الحقل فارغاً
        setLoading(true);
        try {
            // إضافة maxResults لتقليل حجم البيانات المستلمة
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:science&maxResults=12`);
            const data = await response.json();

            if (data.items) {
                const formattedBooks = data.items.map(item => ({
                    imdbID: item.id,
                    Title: item.volumeInfo.title,
                    Year: item.volumeInfo.publishedDate || "تاريخ غير معروف",
                    Poster: item.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/150x200?text=No+Cover',
                }));
                setBooks(formattedBooks);
            } else {
                setBooks([]); // مسح النتائج إذا لم يوجد شيء
            }
        } catch (error) {
            console.error("خطأ في جلب البيانات:", error);
        }
        setLoading(false);
    };

    return (
        <div className="home-page">
            <Search onSearch={searchBooks} />
            {loading ? (
                <div className="loader">جاري تصفح رفوف المكتبة...</div>
            ) : (
                <div className="movies-grid">
                    {books.map((book) => (
                        <MovieCard key={book.imdbID} movie={book} isFavorite={false} />
                    ))}
                </div>
            )}
        </div>
    );
}