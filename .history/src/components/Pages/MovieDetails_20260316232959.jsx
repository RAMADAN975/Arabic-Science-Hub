import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const params = useParams();
    const id = params['*'] || params.id;
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const cleanId = id.startsWith('/') ? id : `/${id}`;
                const response = await fetch(`https://openlibrary.org${cleanId}.json`);
                const data = await response.json();

                setBook({
                    title: data.title,
                    // هنا نقوم بتعريب الرسالة في حال عدم وجود وصف
                    description: typeof data.description === 'object'
                        ? data.description.value
                        : data.description || "لا يوجد وصف تفصيلي متاح لهذا الكتاب في الوقت الحالي.",
                    coverImg: data.covers
                        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                        : 'https://via.placeholder.com/400x600?text=لا+يوجد+غلاف'
                });
            } catch (error) {
                console.error("خطأ:", error);
            }
            setLoading(false);
        };
        fetchBookDetails();
    }, [id]);

    if (loading) return <div className="loader">جاري جلب نبذة الكتاب...</div>;
    if (!book) return <div className="loader">لم نتمكن من العثور على نبذة لهذا الكتاب.</div>;

    return (
        <div className="movie-details" dir="rtl">
            <div className="details-container">
                <div className="details-image">
                    <img src={book.coverImg} alt={book.title} />
                </div>

                <div className="details-info">
                    <h1 style={{ color: '#1a5f7a' }}>{book.title}</h1>

                    <div className="description-section" style={{ marginTop: '20px' }}>
                        <h3 style={{ borderBottom: '2px solid #1a5f7a', display: 'inline-block' }}>
                            نبذة عن هذا المرجع:
                        </h3>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '15px' }}>
                            {book.description}
                        </p>
                    </div>

                    <Link to="/" className="back-btn" style={{ marginTop: '30px' }}>
                        العودة إلى المكتبة الرئيسية
                    </Link>
                </div>
            </div>
        </div>
    );
}