import React from "react";
import { useNavigate } from "react-router-dom";
import '../styled/dashboard.css'; // Optional: for custom styles
import { FaUserCircle } from "react-icons/fa"; // 👈 Import the profile icon

const departments = [
  {
    id: "mca",
    name: "Master of Computer Application",
    color: "#e3f2fd"
  },
  {
    id: "msc",
    name: "Masters of Computer Science",
    color: "#fce4ec"
  },
  {
    id: "pgdcs",
    name: "Post Graduate Diploma in Computer Science",
    color: "#e0f7fa"
  },
  {
    id: "pgdca",
    name: "Post Graduate Diploma in Computer Application",
    color: "#f3e5f5"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = (deptId) => {
    navigate(`/department/${deptId}`);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="container py-4">
      {/* Profile Icon in top-right */}
      <div className="d-flex justify-content-end mb-3">
        <FaUserCircle
          size={32}
          style={{ cursor: "pointer", color: "#0d6efd" }}
          title="Profile"
          onClick={handleProfileClick}
        />
      </div>

      <h2 className="mb-4 text-white text-center">Select Your Department</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {departments.map((dept, index) => (
          <div className="col d-flex" key={index}>
            <div
              className="card flex-fill shadow-sm d-flex align-items-center justify-content-center p-4"
              style={{
                backgroundColor: dept.color,
                cursor: "pointer",
                height: "150px"
              }}
              onClick={() => handleClick(dept.id)}
            >
              <h5>{dept.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
