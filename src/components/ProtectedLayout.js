import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const isPublicPage = ["/login", "/register", "/"].includes(location.pathname);

  return (
    <div style={{ minHeight: "100vh" }}>
      {!isPublicPage && (
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px",
            boxShadow: "0px 25px 8px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* Back Button */}
          <div
            onClick={handleBack}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#007bff",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            <FiArrowLeft size={20} style={{ marginRight: "5px" }} />
            Back
          </div>

          {/* Center Title (optional) */}
          <h4 style={{ margin: 0, color: "white", fontWeight: "700" }}>
            Student Resource Portal
          </h4>

          {/* Right Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Profile Icon */}
            <div
              onClick={handleProfile}
              style={{
                cursor: "pointer",
                color: "#007bff",
                transition: "transform 0.2s ease-in-out",
              }}
              title="Profile"
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaUserCircle size={28} />
            </div>

            {/* Logout Button */}
            <div
              onClick={handleLogout}
              style={{
                cursor: "pointer",
                color: "#dc3545",
                transition: "transform 0.2s ease-in-out",
              }}
              title="Logout"
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FiLogOut size={26} />
            </div>
          </div>
        </header>
      )}

      {/* Page Content */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
