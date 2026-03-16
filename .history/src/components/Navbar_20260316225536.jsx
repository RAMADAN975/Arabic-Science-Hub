export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">مكتبة رمضان العلمية 📚</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">الرئيسية</Link></li>
                <li><Link to="/watchlist">كتبي المفضلة 🔖</Link></li>
            </ul>
        </nav>
    );
}