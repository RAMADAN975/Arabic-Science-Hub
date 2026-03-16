import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const params = useParams();
    const id = params['*'] || params.id;
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [translatedDesc, setTranslatedDesc] = useState("");
    const [isTranslating, setIsTranslating] = useState(false);

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
                    description: typeof data.description === 'object'
                        ? data.description.value
                        : data.description || "لا يوجد وصف متاح لهذا الكتاب.",
                    coverImg: data.covers
                        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                        : 'https://via.placeholder.com/400x600?text=No+Cover'
                });
            } catch (error) {
                console.error("خطأ في الجلب:", error);
            }
            setLoading(false);
        };
        fetchBookDetails();
    }, [id]);

    // دالة الترجمة المحسنة للتعامل مع النصوص الطويلة
    const translateToArabic = async () => {
        if (!book.description || isTranslating) return;

        setIsTranslating(true);
        try {
            // نقوم بقص النص ليصبح 500 حرف فقط لتجنب خطأ Limit Exceeded
            const shortDesc = book.description.substring(0, 500);

            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(shortDesc)}&langpair=en|ar`);
            const data = await res.json();

            if (data.responseStatus === 200) {
                setTranslatedDesc(data.responseData.translatedText + "...");
            } else {
                alert("نص الكتاب طويل جداً على نسخة الترجمة المجانية.");
            }
        } catch (error) {
            alert("حدث خطأ في الاتصال بخدمة الترجمة." + error);
        }
        setIsTranslating(false);
    };

    if (loading) return <div className="loader">جاري التحميل...</div>;
    if (!book) return <div className="loader">الكتاب غير موجود.</div>;

    return (
        <div className="movie-details" dir="rtl">
            <div className="details-container">
                <div className="details-image">
                    <img src={book.coverImg} alt={book.title} />
                </div>

                <div className="details-info">
                    <h1>{book.title}</h1>
                    <div className="description-section">
                        <h3>نبذة عن الكتاب:</h3>
                        <p className="desc-text">
                            {translatedDesc ? translatedDesc : book.description}
                        </p>

                        {!translatedDesc && (
                            <button onClick={translateToArabic} className="translate-btn" disabled={isTranslating}>
                                {isTranslating ? "جاري الترجمة..." : "ترجمة المختصر للعربية 🌍"}
                            </button>
                        )}
                    </div>
                    <Link to="/" className="back-btn">العودة للمكتبة</Link>
                </div>
            </div>
        </div>
    );
}