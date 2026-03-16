// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         // Main navigation container
//         <nav className="navbar">

//             {/* Website Logo - Clicking it returns user to Home */}
//             <div className="nav-logo">
//                 <Link to="/">سينما رمضان 🎬</Link>
//             </div>

//             {/* Navigation Links List */}
//             <ul className="nav-links">

//                 {/* Link to Home Page */}
//                 <li>
//                     <Link to="/">الرئيسية</Link>
//                 </li>

//                 {/* Link to My Watchlist Page */}
//                 <li>
//                     <Link to="/watchlist">مفضلاتي ❤️</Link>
//                 </li>

//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


export default function Navbar() {
    return (
        // Main navigation container
        <nav className="navbar">

            {/* Website Logo - Clicking it returns user to Home */}
            <div className="nav-logo">
                <Link to="/">سينما رمضان 🎬</Link>
            </div>

            {/* Navigation Links List */}
            <ul className="nav-links">

                {/* Link to Home Page */}
                <li>
                    <Link to="/">الرئيسية</Link>
                </li>

                {/* Link to My Watchlist Page */}
                <li>
                    <Link to="/watchlist">مفضلاتي ❤️</Link>
                </li>

            </ul>
        </nav>
    )
}
