import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

const Login: React.FC = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false); // toggle popup
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      navigate("/"); // redirect to home
    } else {
      setError("Invalid email or password");
    }
  };

  // Handle register
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const success = register(form);
    if (success) {
      alert("Registration successful! Please login.");
      setIsRegister(false);
      setForm({ name: "", email: "", password: "" });
    } else {
      setError("Email already exists");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Bucci Collections</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>

      <p>
        Don’t have an account?{" "}
        <button onClick={() => setIsRegister(true)} className="link-button">Register</button>
      </p>

      {/* Registration Popup */}
      {isRegister && (
        <div className="popup">
          <div className="popup-content">
            <h3>Create Account</h3>
            <form onSubmit={handleRegister}>
              <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
              <button type="submit">Register</button>
              <button type="button" onClick={() => setIsRegister(false)} className="cancel">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
