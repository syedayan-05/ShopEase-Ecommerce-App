import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function OrderSuccess() {
    const navigate = useNavigate();
    const location = useLocation();
    const { clearCart } = useCart();
    const { width, height } = useWindowSize();
    const cleared = useRef(false); // ✅ Prevent multiple clearCart calls

    const { name, address, phone } = location.state || {
        name: "Customer",
        address: "Your Address",
        phone: "0000000000",
    };

    useEffect(() => {
        if (!cleared.current) {
            clearCart(); // ✅ Clear cart only once
            cleared.current = true;
        }

        const timer = setTimeout(() => {
            navigate("/", { replace: true }); // ✅ Prevent back navigation
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate, clearCart]);

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center px-4 animate__animated animate__zoomIn bg-white">
            {/* 🎉 Confetti */}
            <Confetti width={width} height={height} numberOfPieces={250} recycle={false} />

            {/* ✅ Icon */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                alt="Order Success"
                className="w-28 h-28 mb-4 animate__animated animate__tada"
            />

            {/* ✅ Headings */}
            <h2 className="text-2xl md:text-4xl font-bold text-green-600 mb-2">
                Thank You, {name}! 🎉
            </h2>
            <p className="text-gray-600 mb-1">Your order has been placed successfully.</p>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                📍 {address} <br /> 📞 {phone}
            </p>

            {/* ✅ Back Button */}
            <button
                onClick={() => navigate("/", { replace: true })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 animate__animated animate__fadeInUp font-medium shadow-md hover:shadow-lg"
            >
                Back to Home 🏠
            </button>
        </div>
    );
}

export default OrderSuccess;
