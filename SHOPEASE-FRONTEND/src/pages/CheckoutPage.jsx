// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "animate.css";
import AnimatedPage from "../components/AnimatedPage";

function CheckoutPage() {
    const navigate = useNavigate();
    const { cartItems, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderData = { ...formData, items: cartItems };

        try {
            const res = await fetch("http://localhost:8080/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            if (res.ok) {
                clearCart();
                navigate("/order-success", { state: formData });
            } else {
                alert("Order failed. Please try again.");
            }
        } catch (err) {
            console.error("Order Error:", err);
            alert("Server error. Try again later.");
        }
    };

    return (
        <AnimatedPage>
            <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    🔐 Checkout
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-semibold mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border px-4 py-2 rounded-lg shadow-sm"
                            placeholder="Your Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Address</label>
                        <textarea
                            name="address"
                            className="w-full border px-4 py-2 rounded-lg shadow-sm"
                            placeholder="Your Delivery Address"
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            className="w-full border px-4 py-2 rounded-lg shadow-sm"
                            placeholder="e.g. 9876543210"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate__animated animate__pulse"
                    >
                        Place Order 🧾
                    </button>
                </form>
            </div>
        </AnimatedPage>
    );
}

export default CheckoutPage;
