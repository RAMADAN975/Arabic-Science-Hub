import { useState } from "react";
import Search from "../Search";
import MovieCard from "../MovieCard";

export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchBooks = async (query) => {
        if (!query || query.trim() === "") return;

        setLoading(true);
        try {
            // نستخدم هنا Open Library وهي مجانية تماماً ولا تحتاج API Key
            const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=12`);
            const data = await response.json();

            if (data.docs) {
                const formattedBooks = data.docs.map(book => ({
                    imdbID: book.key, // معرف فريد للكتاب
                    Title: book.title,
                    Year: book.first_publish_year || "تاريخ غير معروف",
                    // جلب صورة الغلاف بناءً على الـ ID الخاص بالكتاب
                    Poster: book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                        : 'https://via.placeholder.com/150x200?text=No+Cover',
                }));
                setBooks(formattedBooks);
            }
        } catch (error) {
            console.error("خطأ في جلب البيانات:", error);
        }
        setLoading(false);
    };

    return (
        <div className="home-page" style={{ minHeight: '80vh' }}>
            <Search onSearch={searchBooks} />
            {loading ? (
                <div className="loader">جاري تصفح رفوف المكتبة...</div>
            ) : (
                <div className="movies-grid">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <MovieCard key={book.imdbID} movie={book} isFavorite={false} />
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#7f8c8d' }}>
                            ابحث عن عنوان كتاب أو اسم مؤلف علمي لتبدأ القراءة 📚
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}