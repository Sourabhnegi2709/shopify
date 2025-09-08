import { useState, useContext, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
    const { totalItems } = useContext(CartContext);

    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Handle clicks outside dropdown and mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Navigation handlers
    const handleHome = () => navigate("/");
    const handleCart = () => navigate("/cart");
    const handleLogin = () => navigate("/login");
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    const handleProfile = () => navigate("/profile");
    const handleOrders = () => navigate("/orders");
    const handleContact = () => navigate("/contact");
    const handleAbout = () => navigate("/about");

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    };

    const DropdownContent = () => (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-2 z-50">
            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left cursor-default">
                {user.username}
            </button>
            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left cursor-default">
                {user.email}
            </button>
            <button
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
                Logout
            </button>
        </div>
    );

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <h1
                    onClick={handleHome}
                    className="text-2xl cursor-pointer font-bold text-gray-800"
                >
                    SourabhShop
                </h1>

                {/* Search Bar (Desktop) */}
                <form
                    onSubmit={handleSearch}
                    className="hidden md:flex items-center border rounded-lg overflow-hidden"
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="px-3 py-2 outline-none w-64"
                    />
                    <button
                        type="submit"
                        className="px-3 py-2 bg-black text-white hover:bg-gray-800"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </form>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-600 font-medium items-center">
                    <li
                        onClick={handleHome}
                        className="hover:text-black cursor-pointer"
                    >
                        Home
                    </li>
                    <li
                        onClick={handleAbout}
                        className="hover:text-black cursor-pointer"
                    >
                        About
                    </li>
                    <li
                        onClick={handleContact}
                        className="hover:text-black cursor-pointer"
                    >
                        Contact
                    </li>
                    <li>
                        <button
                            className="relative"
                            onClick={handleCart}
                            aria-label="Cart"
                        >
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                {totalItems}
                            </span>
                        </button>
                    </li>
                    {user ? (
                        <li ref={dropdownRef} className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 hover:text-black"
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                <User className="w-5 h-5" />
                                {user.username}
                            </button>
                            {dropdownOpen && <DropdownContent />}
                        </li>
                    ) : (
                        <li>
                            <button
                                onClick={handleLogin}
                                className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800"
                            >
                                Login
                            </button>
                        </li>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        className="relative"
                        onClick={handleCart}
                        aria-label="Cart"
                    >
                        <ShoppingCart className="w-6 h-6 text-gray-700" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                            {totalItems}
                        </span>
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden bg-white shadow-md"
                >
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center border rounded-lg m-4 overflow-hidden"
                    >
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className="px-3 py-2 outline-none w-full"
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 bg-black text-white hover:bg-gray-800"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </form>
                    <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
                        <li
                            onClick={handleHome}
                            className="hover:text-black cursor-pointer"
                        >
                            Home
                        </li>
                        <li
                            onClick={handleAbout}
                            className="hover:text-black cursor-pointer"
                        >
                            About
                        </li>
                        <li
                            onClick={handleContact}
                            className="hover:text-black cursor-pointer"
                        >
                            Contact
                        </li>
                        {user ? (
                            <li ref={dropdownRef} className="relative w-full text-center">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex justify-center items-center gap-1 hover:text-black w-full"
                                    aria-haspopup="true"
                                    aria-expanded={dropdownOpen}
                                >
                                    <User className="w-5 h-5" />
                                    {user.username}
                                </button>
                                {dropdownOpen && <DropdownContent />}
                            </li>
                        ) : (
                            <li>
                                <button
                                    onClick={handleLogin}
                                    className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800"
                                >
                                    Login
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
