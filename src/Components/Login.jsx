import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

// Use localhost for testing, replace with deployed backend URL when live
const API_URL = "http://localhost:5000/api/auth";

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
      setIsAuthenticated?.(true); // optional chaining in case prop not passed
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "blue" }}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
