import { useState, useEffect } from "react";
import Search from "../Search";
import MovieCard from "../MovieCard";

export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    // دالة البحث (تعمل فقط عند الضغط على الزر)
    const searchBooks = async (query) => {
        if (!query || query.trim() === "") return;

        setLoading(true);
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:science&maxResults=12`);

            if (response.status === 429) {
                alert("جوجل حظرت الطلبات مؤقتاً، انتظر دقيقة ثم حاول مجدداً");
                setLoading(false);
                return;
            }

            const data = await response.json();
            if (data.items) {
                const formattedBooks = data.items.map(item => ({
                    imdbID: item.id,
                    Title: item.volumeInfo.title,
                    Year: item.volumeInfo.publishedDate || "تاريخ غير معروف",
                    Poster: item.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/150x200?text=No+Cover',
                }));
                setBooks(formattedBooks);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
        setLoading(false);
    };

    // هذا الجزء فارغ عمداً لمنع أي بحث تلقائي عند فتح الصفحة
    useEffect(() => {
        // لا تضع أي شيء هنا ليبدأ الموقع بصفحة فارغة حتى يبحث المستخدم بنفسه
    }, []);

    return (
        <div className="home-page">
            <Search onSearch={searchBooks} />
            {loading ? (
                <div className="loader">جاري البحث في المكتبة...</div>
            ) : (
                <div className="movies-grid">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <MovieCard key={book.imdbID} movie={book} isFavorite={false} />
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#666' }}>
                            أهلاً بك في المكتبة العلمية، ابحث عن موضوع علمي لتبدأ!
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}