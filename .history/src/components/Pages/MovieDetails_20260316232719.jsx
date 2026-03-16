import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const params = useParams(); // نجلب كل البارامترات
    const id = params['*'] || params.id; // نتحقق من المسار الكامل (مهم جداً للروابط المعقدة)
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            // صمام الأمان: إذا لم نجد id، لا تفعل شيئاً
            if (!id) return;

            setLoading(true);
            try {
                // التأكد من تنسيق المسار بشكل صحيح للمكتبة
                const cleanId = id.startsWith('/') ? id : `/${id}`;
                const response = await fetch(`https://openlibrary.org${cleanId}.json`);
                const data = await response.json();

                setBook({
                    title: data.title,
                    description: typeof data.description === 'object'
                        ? data.description.value
                        : data.description || "لا يوجد وصف متاح لهذا المرجع.",
                    coverImg: data.covers
                        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                        : 'https://via.placeholder.com/400x600?text=No+Cover'
                });
            } catch (error) {
                console.error("خطأ في جلب البيانات:", error);
            }
            setLoading(false);
        };

        fetchBookDetails();
    }, [id]);

    if (loading) return <div className="loader">جاري التحميل...</div>;
    if (!book) return <div className="loader">لم نتمكن من العثور على الكتاب، تأكد من الرابط.</div>;

    return (
        <div className="movie-details">
            <div className="details-container">
                <img src={book.coverImg} alt={book.title} style={{ width: '300px', borderRadius: '10px' }} />
                <div className="details-info">
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                    <Link to="/" className="back-btn">العودة للرئيسية</Link>
                </div>
            </div>
        </div>
    );
}