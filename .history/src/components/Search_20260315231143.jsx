import React from 'react';

// نستخدم الـ Props لاستقبال البيانات والدوال من المكون الأب (Home أو App)
const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {

    // دالة داخلية للتعامل مع ضغطة زر Enter من لوحة المفاتيح
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="ابحث عن أفلامك المفضلة..."
                value={searchTerm} // القيمة مرتبطة بالـ State في الأب
                onChange={(e) => setSearchTerm(e.target.value)} // تحديث النص عند الكتابة
                onKeyPress={handleKeyPress} // البحث عند ضغط Enter
            />

            <button onClick={handleSearch}>
                <span>بحث</span>
                <i className="fa fa-search"></i> {/* يمكنك إضافة أيقونة هنا */}
            </button>
        </div>
    );
};

export default Search;