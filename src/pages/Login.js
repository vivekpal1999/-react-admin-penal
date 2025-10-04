import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ add this
import "./BarChart/Login.css";

export default function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate(); // ✅ hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple login check
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/dashboard");   // ✅ redirect to your existing dashboard page
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
