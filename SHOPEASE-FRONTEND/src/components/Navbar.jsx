import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Home, Info, Phone } from 'lucide-react';
import useDarkMode from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

function Navbar() {
    const { cartItems } = useCart();
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg py-4 px-6 flex justify-between items-center animate__animated animate__fadeInDown">

            {/* Logo */}
            <Link
                to="/"
                className="text-3xl font-extrabold text-white tracking-wider hover:scale-105 transition-transform duration-300 animate__animated animate__rubberBand"
            >
                ShopEase
            </Link>

            {/* Nav Links */}
            <div className="flex gap-8 text-white font-medium text-lg items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-white pb-1 scale-105 transition-transform duration-300"
                            : "hover:text-gray-200 hover:scale-105 transition-transform duration-300"
                    }
                >
                    <Home size={18} className="inline mr-1" /> Home
                </NavLink>

                <NavLink
                    to="/about"
                    className="hover:text-gray-200 transition"
                >
                    <Info size={18} className="inline mr-1" /> About
                </NavLink>

                <NavLink
                    to="/contact"
                    className="hover:text-gray-200 transition"
                >
                    <Phone size={18} className="inline mr-1" /> Contact
                </NavLink>

                {/* 🌙 Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-2 bg-white text-gray-800 dark:bg-gray-800 dark:text-white px-2 py-1 rounded-full shadow transition duration-300"
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>

            {/* Cart Button */}
            <Link
                to="/cart"
                className="relative bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
                <ShoppingCart size={18} className="inline mr-2" />
                Cart
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate__animated animate__bounce">
                        {cartItems.length}
                    </span>
                )}
            </Link>
        </nav>
    );
}

export default Navbar;
