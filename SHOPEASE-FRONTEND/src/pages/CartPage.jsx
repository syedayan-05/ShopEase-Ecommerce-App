import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="animate__animated animate__fadeInRight px-4 sm:px-6 md:px-8 py-4 space-y-6">

            <h2 className="text-3xl font-extrabold text-blue-600 mb-6 flex items-center gap-2 animate__animated animate__fadeInDown">
                🛒 Your Cart
            </h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-lg">Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-900 shadow-md hover:shadow-xl rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-transform duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-xl shadow-sm"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-600 text-sm">₹ {item.price}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity === 1}
                                    className="bg-gray-200 text-gray-800 hover:bg-gray-300 p-1 rounded-full transition-all duration-300"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="bg-gray-200 text-gray-800 hover:bg-gray-300 p-1 rounded-full transition-all duration-300"
                                >
                                    <Plus size={16} />
                                </button>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-600 hover:text-red-800 transition"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Subtotal & Checkout Button */}
                    <div className="text-right mt-6 animate__animated animate__fadeInUp">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Total: ₹ {calculateTotal()}
                        </h3>
                        <Link to="/checkout">
                            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl animate__animated animate__pulse">
                                Proceed to Checkout 🚀
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
