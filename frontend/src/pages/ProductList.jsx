import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/products/')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px' }}>
                    <h4>{product.name}</h4>
                    <p>₹ {product.price}</p>
                    <Link to={`/products/${product.id}`}>View Detail</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
