// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/products');
                setProducts(res.data);
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">ShopEase Products</h1>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
                        >
                            <img
                                src={`http://localhost:8080/product-images/${product.imageName}`}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <p className="text-lg font-bold text-blue-600">₹{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
