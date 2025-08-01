// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import ProductCard from './ProductCard'; // ✅ Import this

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
