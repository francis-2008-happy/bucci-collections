// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo + Brand Name */}
        <div className="logo-container">
          <img src="./logo2.png" alt="Bucci Collections Logo" className="logo-image" />
          <h1 className="logo">Bucci Collections</h1>
        </div>

        {/* Hamburger for mobile */}
        <button className="hamburger" onClick={openMenu}>
          ☰
        </button>

        {/* Desktop nav */}
        <nav className="nav desktop-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reviews">Customer Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
          </ul>
        </nav>

        {/* Mobile overlay menu */}
        {isOpen && (
          <div className="overlay-menu">
            <button className="close-btn" onClick={closeMenu}>&times;</button>
            <ul className="overlay-links">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/reviews" onClick={closeMenu}>Customer Reviews</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/account" onClick={closeMenu}>My Account</Link></li>
              <li><Link to="/cart" onClick={closeMenu}>Cart ({cartItems.length})</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;





















