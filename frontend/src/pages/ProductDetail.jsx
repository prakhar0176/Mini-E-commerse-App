import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        axiosInstance.get(`/products/${id}/`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>₹ {product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
