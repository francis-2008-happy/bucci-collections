// src/components/HeroSlider.tsx
import React, { useState, useEffect } from "react";
import "../styles/HeroSlider.css";

const slides = [
  {
    image: "./background1.jpeg",
    title: "New Shoe Collection",
    description: "Discover the latest sneakers for your style",
  },
  {
    image: "./background2.jpeg",
    title: "Trendy Clothing",
    description: "Stay stylish with our new arrivals",
  },
  {
    image: "./background3.jpeg",
    title: "Accessories for Every Outfit",
    description: "Complete your look with our accessories",
  },
    {
    image: "./background4.jpg",
    title: " Sports Shoe Collection",
    description: "Discover the latest Sport Shoe for your style",
  },
  {
    image: "./background5.webp",
    title: "winter wears",
    description: "Stay stylish with our new arrivals on winter wears",
  },
  {
    image: "./background6.jpeg",
    title: "Accessories for Every Outfit",
    description: "Complete your look with our ready to wear sanator for all",
  },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
