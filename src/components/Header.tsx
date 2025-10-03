// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';
import { House } from 'lucide-react';
import { Star } from 'lucide-react';
import { Contact } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { LogIn } from 'lucide-react';

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
            <li><Link to="/"> <House /> Home</Link></li>
            <li><Link to="/reviews"> <Star /> Customer Reviews</Link></li>
            <li><Link to="/login">  <LogIn /> Login</Link></li>
            <li><Link to="/account"> <CircleUserRound />My Account</Link></li>
            <li><Link to="/cart"> <ShoppingCart /> Cart ({cartItems.length})</Link></li>
          </ul>
        </nav>

        {/* Mobile overlay menu */}
        {isOpen && (
          <div className={`overlay-menu ${isOpen ? 'slide-in' : ''}`}>
            <button className="close-btn" onClick={closeMenu}>&times;</button>
            {/* Logo + Brand Name */}
            <div className="logo-container">
                <img src="./logo2.png" alt="Bucci Collections Logo" className="logo-image" />
                <h1 className="logo">Bucci Collections</h1>
            </div>
            <ul className="overlay-links">
              <li><Link to="/" onClick={closeMenu}> <House /> Home</Link></li>
              <li><Link to="/reviews" onClick={closeMenu}> <Star /> Customer Reviews</Link></li>
              <li><Link to="/login" onClick={closeMenu}> <LogIn /> Login </Link></li>
              <li><Link to="/account" onClick={closeMenu}> <CircleUserRound /> My Account</Link></li>
              <li><Link to="/cart" onClick={closeMenu}> <ShoppingCart /> Cart ({cartItems.length})</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
