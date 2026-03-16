import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const params = useParams();
    // التقاط المعرف البرمجي للكتاب سواء كان مساراً كاملاً أو معرفاً بسيطاً
    const id = params['*'] || params.id;
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            if (!id) return;

            setLoading(true);
            try {
                // تهيئة الرابط ليتوافق مع مكتبة Open Library المفتوحة
                const cleanId = id.startsWith('/') ? id : `/${id}`;
                const response = await fetch(`https://openlibrary.org${cleanId}.json`);
                const data = await response.json();

                // تنظيم البيانات وعرض رسائل بديلة بالعربي في حال فقدان بعض المعلومات
                setBook({
                    title: data.title || "عنوان غير متوفر",
                    description: typeof data.description === 'object'
                        ? data.description.value
                        : data.description || "لا يوجد وصف تفصيلي متاح لهذا المرجع العلمي حالياً.",
                    publishDate: data.created?.value || "تاريخ النشر غير مسجل",
                    coverImg: data.covers
                        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                        : 'https://via.placeholder.com/400x600?text=لا+يوجد+غلاف'
                });
            } catch (error) {
                console.error("خطأ في جلب بيانات الكتاب:", error);
            }
            setLoading(false);
        };

        fetchBookDetails();
    }, [id]);

    // رسائل الحالة بالعربي لضمان تجربة مستخدم متسقة
    if (loading) return <div className="loader">جاري تحضير بيانات الكتاب العلمي...</div>;
    if (!book) return <div className="loader">عذراً، تعذر العثور على هذا الكتاب. يرجى التأكد من الرابط.</div>;

    return (
        <div className="movie-details" dir="rtl"> {/* إضافة dir="rtl" لضبط اتجاه النص العربي */}
            <div className="details-container">
                <div className="details-image">
                    <img src={book.coverImg} alt={book.title} />
                </div>

                <div className="details-info">
                    <h1>{book.title}</h1>
                    <p className="publish-date"><strong>تاريخ الإضافة للمكتبة:</strong> {book.publishDate}</p>

                    <div className="description-section">
                        <h3>نبذة عن الكتاب:</h3>
                        <p>{book.description}</p>
                    </div>

                    <Link to="/" className="back-btn">العودة للرئيسية</Link>
                </div>
            </div>
        </div>
    );
}