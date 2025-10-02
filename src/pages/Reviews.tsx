// src/pages/Reviews.tsx
import React, { useState } from "react";
import '../styles/Reviews.css';
import HeroSlider from "../components/HeroSlider";
import reviewsData from "../data/reviews.json"; // import JSON

const CustomerReview: React.FC = () => {
  const [reviews, setReviews] = useState(reviewsData); // use JSON as initial state
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    product: "",
    rating: 5,
    comment: "",
    image: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewToAdd = {
      id: Date.now(),
      ...newReview,
      image: newReview.image || "./default-user.png"
    };
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ name: "", email: "", product: "", rating: 5, comment: "", image: "" });
  };

  return (
    
    <div className="review-page">
      

      {/* Review Form */}
      <div className="review-form-container">
        <HeroSlider />
        <h1> Leave your Reviews</h1>
        <form className="review-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={newReview.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={newReview.email} onChange={handleChange} required />
          <input type="text" name="product" placeholder="Product Name" value={newReview.product} onChange={handleChange} required />
          <select name="rating" value={newReview.rating} onChange={handleChange}>
            <option value={5}>⭐⭐⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={1}>⭐</option>
          </select>
          <textarea name="comment" placeholder="Write your review..." value={newReview.comment} onChange={handleChange} required></textarea>
          <input type="text" name="image" placeholder="Image URL (optional)" value={newReview.image} onChange={handleChange} />
          <button type="submit">Submit Review</button>
        </form>
        
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img src={review.image} alt={review.name} className="customer-img" />
            <div className="review-content">
              <h3>{review.name}</h3>
              <p className="product-name">{review.product}</p>
              <p className="rating">{"⭐".repeat(review.rating)}</p>
              <p className="comment">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
