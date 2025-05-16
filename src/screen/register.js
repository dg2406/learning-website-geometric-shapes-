import React, { useState } from 'react';
import './register.css';
import { Grid2 } from "@mui/material";
import Header from '../Layout/header';
import './coursePage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      firstName: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: ''
    };

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.age.trim() || isNaN(formData.age) || parseInt(formData.age) <= 0) {
      errors.age = "Age must be a valid positive number";
      isValid = false;
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log("Form data:", formData);
    }
  };

  const handlePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password';
    }
  };

  return (
    <Grid2 container sx={{ backgroundColor: "#454545", height: "1000px" }}>
      <Header />
      <Grid2 item xs={12} sm={6} md={4} sx={{ margin: 'auto', padding: '20px', width: '500px' }}>
        <div className="form-container">
          <h2 style={{ color: "darkviolet" }}>Create your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fname">First Name:</label>
              <input
                type="text"
                id="fname"
                name="firstName"
                placeholder="Your first name.."
                value={formData.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && <div style={{ color: 'red' }}>{formErrors.firstName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                placeholder="Age.."
                value={formData.age}
                onChange={handleChange}
              />
              {formErrors.age && <div style={{ color: 'red' }}>{formErrors.age}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password.."
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <div style={{ color: 'red' }}>{formErrors.password}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password.."
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {formErrors.confirmPassword && <div style={{ color: 'red' }}>{formErrors.confirmPassword}</div>}
            </div>

            <div className="form-group">
              <input type="checkbox" id="showPassword" onChange={handlePasswordVisibility} />
              <label htmlFor="showPassword">Show Password</label>
            </div>

            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Grid2>
    </Grid2>
  );
};

export default RegisterPage;
