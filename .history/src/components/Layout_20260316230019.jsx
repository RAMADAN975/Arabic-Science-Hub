import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app-container">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <footer style={{
                textAlign: "center",
                padding: "20px",
                color: "#555",
            }}>
                جميع الحقوق محفوظة - مشروع مكتبة رمضان العلمية © 2026
            </footer>
        </div>
    )
}
