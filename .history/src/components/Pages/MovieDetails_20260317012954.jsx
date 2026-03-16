// دالة لتقسيم النص وترجمته بالكامل
const translateToArabic = async () => {
    if (!book.description || isTranslating) return;

    setIsTranslating(true);
    try {
        // 1. تقسيم النص الكبير إلى فقرات أو جمل لا تتعدى 450 حرفاً
        const textChunks = book.description.match(/.{1,450}/g) || [];
        let fullTranslation = "";

        // 2. ترجمة كل جزء على حدة وانتظار النتيجة
        for (const chunk of textChunks) {
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=en|ar`);
            const data = await res.json();
            if (data.responseData) {
                fullTranslation += data.responseData.translatedText + " ";
            }
        }

        // 3. عرض النص المترجم بالكامل
        setTranslatedDesc(fullTranslation);
    } catch (error) {
        console.error("خطأ في الترجمة الكاملة:", error);
        alert("عذراً، تعذر إكمال الترجمة الكاملة حالياً.");
    }
    setIsTranslating(false);
};