// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar'; // سنقوم بإنشائه في الخطوة القادمة

// const Layout = () => {
//     return (
//         <div className="app-container">
//             {/* هذا العنصر ثابت وسيظهر في كل الصفحات */}
//             <Navbar />

//             {/* هنا سيتم عرض محتوى الصفحة التي يطلبها المستخدم (Home أو Details أو Watchlist) */}
//             <main>
//                 <Outlet />
//             </main>

//             {/* يمكنك إضافة Footer هنا ليكون ثابتاً أيضاً */}
//             <footer style={{ textAlign: 'center', padding: '20px', color: '#555' }}>
//                 جميع الحقوق محفوظة - مشروع سينما رمضان © 2026
//             </footer>
//         </div>
//     );
// };

// export default Layout;

import React from "react";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="app-container">
            <Navbar />
        </div>
    )
}
