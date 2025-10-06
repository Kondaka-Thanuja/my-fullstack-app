import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

// Use localhost for testing, replace with deployed backend URL when live
// const API_URL = "http://localhost:5000/api/auth";
// const API_URL = "http://localhost:5000/api/auth";
const API_URL = "https://my-fullstack-app.onrender.com/api/auth";



const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      alert("Login successful!");
      setIsAuthenticated?.(true);
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="login-register-text">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="login-register-link"
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
