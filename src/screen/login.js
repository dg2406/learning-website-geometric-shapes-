import React, { useState } from "react";
import Header from "../Layout/header";
import { Alert, Box, Grid2 } from "@mui/material";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!username.trim()) {
      formIsValid = false;
      errors["username"] = alert("Username is required");
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = alert("Password is required");
    } else if (password.length < 6) {
      formIsValid = false;
      errors["password"] = alert("Password must be at least 6 characters long");
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <Grid2 sx={{ backgroundColor: "#454545" }} height={"1000px"}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "220px",
          backgroundColor: "#D5B3FC",
          marginLeft: "600px",
          height: "550px",
          width: "400px",
          p: 3,
        }}
      >
        <h2 className="login-heading">Login to your account</h2>

        <form onSubmit={handleSubmit}>
          <label id="user" htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="name-login"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error">{errors.username}</div>}
          <br />

          <label id="user" htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password-login"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <br />
          <input type="submit" value="Submit" className="button-login" />
        </form>
      </Box>
    </Grid2>
  );
};

export default Login;
