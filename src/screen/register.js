import React, { useState, useContext } from "react";
import "./register.css";
import { Grid2 } from "@mui/material";
import Header from "../Layout/header";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.firstName.trim())
      errors.firstName = "First name is required";

    if (!formData.email)
      errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid email";

    if (!formData.age)
      errors.age = "Age is required";
    else if (Number(formData.age) <= 0)
      errors.age = "Enter a valid age";

    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const success = register({
      id: Date.now(),
      firstName: formData.firstName,
      email: formData.email,
      age: formData.age,
      password: formData.password,
    });

    if (!success) {
      setFormErrors({
        email: "User already exists",
      });
      return;
    }

    alert("Registration Successful");

    navigate("/");
  };

  return (
    <Grid2
      container
      sx={{
        backgroundColor: "#454545",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Grid2
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          margin: "auto",
          padding: "20px",
          width: "500px",
        }}
      >
        <div className="form-container">
          <h2>Create your account</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <p className="error">{formErrors.firstName}</p>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <p className="error">{formErrors.age}</p>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <p className="error">{formErrors.password}</p>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <p className="error">{formErrors.confirmPassword}</p>
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      </Grid2>
    </Grid2>
  );
};

export default RegisterPage;