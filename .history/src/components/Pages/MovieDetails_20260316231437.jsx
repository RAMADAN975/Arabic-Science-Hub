import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    // useParams سيجلب الـ ID الخاص بالكتاب من الرابط
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            setLoading(true);
            try {
                // نستخدم مسار الـ works الخاص بـ Open Library
                // ملاحظة: الـ id هنا قد يحتوي على "works/" بداخله
                const bookId = id.startsWith('works') ? id : `works/${id}`;
                const response = await fetch(`https://openlibrary.org/${bookId}.json`);
                const data = await response.json();

                // ترتيب البيانات لعرضها
                setBook({
                    title: data.title,
                    description: typeof data.description === 'object'
                        ? data.description.value
                        : data.description || "لا يوجد وصف تفصيلي متاح لهذا المرجع العلمي حالياً.",
                    publishDate: data.created?.value || "تاريخ النشر غير مسجل",
                    // جلب أول غلاف متاح للكتاب بجودة عالية (L)
                    coverImg: data.covers
                        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                        : 'https://via.placeholder.com/400x600?text=No+Cover+Available'
                });
            } catch (error) {
                console.error("خطأ في جلب تفاصيل الكتاب:", error);
            }
            setLoading(false);
        };

        fetchBookDetails();
    }, [id]);

    if (loading) return <div className="loader">جاري جلب بيانات الكتاب...</div>;
    if (!book) return <div className="loader">عذراً، لم نتمكن من العثور على تفاصيل هذا الكتاب.</div>;

    return (
        <div className="movie-details">
            <div className="details-container">
                <div className="details-image">
                    <img src={book.coverImg} alt={book.title} />
                </div>

                <div className="details-info">
                    <h1>{book.title}</h1>
                    <p className="publish-year"><strong>تاريخ الإضافة:</strong> {book.publishDate}</p>

                    <div className="description-section">
                        <h3>نبذة عن الكتاب:</h3>
                        <p>{book.description}</p>
                    </div>

                    <Link to="/" className="back-btn">العودة للمكتبة</Link>
                </div>
            </div>
        </div>
    );
}