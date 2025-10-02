// src/pages/Products.tsx
import React from 'react';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import HeroSlider from "../components/HeroSlider";
import '../styles/Products.css';

const Products: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="page-container">
      <HeroSlider />
      <h2>Products</h2>
      <p>Explore our collection of amazing products. All items are carefully curated for quality and style.</p>
      
      <div className="product-grid">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
