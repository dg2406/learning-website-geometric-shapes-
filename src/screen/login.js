import React, { useState, useContext } from "react";
import Header from "../Layout/header";
import { Box, Grid2 } from "@mui/material";
import "./login.css";

import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const validateForm = () => {
    let error = {};

    if (!email.trim()) {
      error.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.email = "Enter a valid email";
    }

    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const success = login(email, password);

    if (success) {
      alert("Login Successful");

      navigate("/dashboard");
    } else {
      setErrors({
        login: "Invalid Email or Password",
      });
    }
  };

  return (
    <Grid2
      sx={{
        backgroundColor: "#454545",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Box className="login-card">
          <h2 className="login-heading">Login to your Account</h2>

          <form onSubmit={handleSubmit}>
            <label className="user-label">Email</label>

            <input
              type="email"
              id="name-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            {errors.email && (
              <div className="error">{errors.email}</div>
            )}

            <label className="user-label">Password</label>

            <input
              type="password"
              id="password-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            {errors.password && (
              <div className="error">{errors.password}</div>
            )}

            {errors.login && (
              <div className="error">{errors.login}</div>
            )}

            <button type="submit" className="button-login">
              Login
            </button>
          </form>
        </Box>
      </Box>
    </Grid2>
  );
};

export default Login;