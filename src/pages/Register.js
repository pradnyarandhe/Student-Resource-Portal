import React, { useState } from "react";
import "../styled/register.css";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    let errs = {};

    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      errs.mobile = "Enter a valid 10-digit phone number";
    }

    if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegister = async () => {
  if (validate()) {
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          password: formData.password,
        }),
      });

      const text = await response.text(); // ⬅️ GET RAW TEXT
      console.log("Raw Response:", text); // ⬅️ LOG IT

      const data = JSON.parse(text); // then parse
      console.log(data);

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("An error occurred during registration.");
    }
  }
};

  return (
    <div className="register-container">
      <h2 className="register-title">Create Account</h2>
      <p className="register-subtitle">Start learning with us</p>

      {/* NO FORM TAG HERE */}
      <Box className="login-box">
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error-msg">{errors.name}</div>}
      </Box>

      <Box className="login-box">
        <TextField
          label="Phone Number"
          name="mobile"
          variant="outlined"
          fullWidth
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <div className="error-msg">{errors.mobile}</div>}
      </Box>

      <Box className="login-box">
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error-msg">{errors.password}</div>}
      </Box>

      <Box className="login-box">
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div className="error-msg">{errors.confirmPassword}</div>
        )}
      </Box>

      <button className="btn verify-btn" onClick={handleRegister}>
        Register
      </button>

      <div className="separator">
        <hr className="line" />
        <span className="or-text">Already have an account?</span>
        <hr className="line" />
      </div>

      <button className="btn login-btn" onClick={() => navigate("/login")}>
        LOGIN TO YOUR ACCOUNT
      </button>
    </div>
  );
}

export default Register;
