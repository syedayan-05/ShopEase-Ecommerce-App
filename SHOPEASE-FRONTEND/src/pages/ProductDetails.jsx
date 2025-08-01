import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "animate.css";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error("Error loading product:", err));
    }, [id]);

    if (!product) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-xl animate__animated animate__fadeInUp">

            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
            />

            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-700 mb-4">₹{product.price}</p>
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
            />

        </div>
    );
}

export default ProductDetails;
