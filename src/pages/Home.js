import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import sampleImage from "../assets/stud1.jpg"; // Replace with your own image

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left side: Image */}
          <div className="col-md-6 mb-4">
            <img
              src={sampleImage}
              alt="Student resources"
              className="img-fluid rounded"
            />
          </div>

          {/* Right side: Content */}
          <div className="col-md-6">
            <h2 className="mb-3">Welcome to the Student Resource Portal</h2>
            <p>
              Access a collection of educational resources like Syllabus, previous year question papers and books in PDF,. Designed for MCA, BSc CS, and IT students.
            </p>
            <button
            className="btn create-btn mt-3"
              onClick={() => alert("Contact page coming soon!")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
