// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


                {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@buccicollections.com</p>
          <p>Phone: +234 905 717 6219</p>
          <p>Address: Lekki, Lagos, Nigeria</p>
        </div>

        {/* Brand & Description */}
        <div className="footer-brand">
          <img src="./logo2.png" alt="Bucci Collections Logo" className="footer-logo" />
          <h2>Bucci Collections</h2>
          <p>
            Bringing you the latest trends in shoes, clothing, and accessories. 
            Style that fits your personality.
          </p>
        </div>


        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us on Our Socials </h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"> <Facebook /> </a>
            <a href="#" aria-label="Instagram">  <Instagram /> </a>
            <a href="#" aria-label="Twitter">  <Twitter /> </a>
            <a href="#" aria-label="LinkedIn"> <Linkedin /> </a>
            <a href="#" aria-label="Whatsapp"> <MessageCircle /> </a>
            <a href="#" aria-label="youtube"> <Youtube /> </a>  
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bucci Collections. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
