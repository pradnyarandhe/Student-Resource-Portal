import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styled/login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
  const navigate = useNavigate();


  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/dashboard"); // redirect to dashboard if already logged in
    }
  }, [navigate]);

  useEffect(() => {
  if (localStorage.getItem("isAuthenticated") === "true") {
    navigate("/dashboard");
  }
}, []);

  const [formData, setFormData] = useState({
    mobile: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};

    if (!/^\d{10}$/.test(formData.mobile)) {
      errs.mobile = "Enter a valid 10-digit mobile number";
    }

    if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

// const handleLogin = async () => {


//   if (validate()) {
//     try {
//       const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           mobile: formData.mobile,
//           password: formData.password
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login success:", data);
//         navigate("/dashboard");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong");
//     }
//   }
// };

const handleLogin = async () => {
  if (validate()) {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mobile: formData.mobile,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login success:", data);

        // ✅ Set login state
        localStorage.setItem("isAuthenticated", "true");

        // Optionally store user info or token
        // localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  }
};

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">Start learning with us</p>
      <form action="/login" method="POST">
        <Box className="login-box">
          <TextField
            label="Mobile Number"
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
      </form>
      <button className="btn continue-btn" onClick={handleLogin}>
        CONTINUE
      </button>
      <div className="separator">
        <hr className="line" />
        <span className="or-text">New to Portal</span>
        <hr className="line" />
      </div>
      <button className="btn create-btn" onClick={handleRegisterRedirect}>
        CREATE YOUR ACCOUNT
      </button>
    </div>
  );
}

export default Login;
