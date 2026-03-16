import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const params = useParams();
    const id = params['*'] || params.id;
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [translatedDesc, setTranslatedDesc] = useState(""); // لحفظ النص المترجم
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
                console.error("خطأ:", error);
            }
            setLoading(false);
        };
        fetchBookDetails();
    }, [id]);

    // دالة الترجمة للعربية
    const translateToArabic = async () => {
        if (!book.description || isTranslating) return;

        setIsTranslating(true);
        try {
            // نستخدم خدمة ترجمة مجانية بسيطة
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(book.description)}&langpair=en|ar`);
            const data = await res.json();
            setTranslatedDesc(data.responseData.translatedText);
        } catch (error) {
            alert("عذراً، حدث خطأ أثناء الترجمة." + error);
        }
        setIsTranslating(false);
    };

    if (loading) return <div className="loader">جاري جلب بيانات الكتاب...</div>;
    if (!book) return <div className="loader">لم يتم العثور على الكتاب.</div>;

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
                            <button
                                onClick={translateToArabic}
                                className="translate-btn"
                                disabled={isTranslating}
                            >
                                {isTranslating ? "جاري الترجمة..." : "ترجمة النبذة للعربية 🌍"}
                            </button>
                        )}
                    </div>

                    <Link to="/" className="back-btn">العودة للمكتبة</Link>
                </div>
            </div>
        </div>
    );
}