// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp">
            {/* Product Image and Link */}
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                />

            </Link>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                </h3>
                <p className="text-gray-600 mt-1">{product.description}</p>

                {/* Price + View Details Button */}
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">
                        ₹{product.price}
                    </span>
                    <Link
                        to={`/product/${product.id}`}
                        className="text-sm text-blue-600 font-medium hover:underline"
                    >
                        View →
                    </Link>
                </div>

                {/* Add to Cart Button */}
                <div className="text-center mt-4">
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Add to Cart 🛒
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
