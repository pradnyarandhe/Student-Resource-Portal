import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-4" style={{ backgroundColor: '#0b1a2d' }}>
      <Link className="navbar-brand text-white" to="/" >Student Resource Portal</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/" > About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
