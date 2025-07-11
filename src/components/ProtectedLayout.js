// // src/components/ProtectedLayout.js
// import React from "react";
// import { useNavigate, Outlet, useLocation } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi"; // logout icon from react-icons

// const ProtectedLayout = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     navigate("/login");
//   };

//   const hideLogout = ["/login", "/register", "/"].includes(location.pathname);

//   return (
//     <div style={{ position: "relative", minHeight: "100vh" }}>
//       {!hideLogout && (
//         <div style={{
//           position: "fixed",
//           top: 15,
//           right: 20,
//           zIndex: 999,
//           cursor: "pointer",
//           backgroundColor: "#f8f9fa",
//           padding: "8px",
//           borderRadius: "50%",
//           boxShadow: "0 0 8px rgba(0,0,0,0.1)"
//         }}
//         onClick={handleLogout}
//         title="Logout"
//         >
//           <FiLogOut size={18} color="#dc3545" />
//         </div>
//       )}
//       <Outlet />
//     </div>
//   );
// };

// export default ProtectedLayout;

// src/components/ProtectedLayout.js
import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { FiLogOut, FiArrowLeft } from "react-icons/fi"; // icons

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleBack = () => {
    navigate(-1); // Go to previous page
  };

  const isPublicPage = ["/login", "/register", "/"].includes(location.pathname);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {!isPublicPage && (
        <>
          <div
            onClick={handleBack}
            style={{
              position: "fixed",
              top: 15,
              left: 20,
              zIndex: 999,
              cursor: "pointer",
              padding: "8px",
              borderRadius: "50%",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)"
            }}
            title="Back"
          >
            <FiArrowLeft size={18} color="#007bff" />
          </div>

          <div
            onClick={handleLogout}
            style={{
              position: "fixed",
              top: 15,
              right: 20,
              zIndex: 999,
              cursor: "pointer",
              padding: "8px",
              borderRadius: "50%",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)"
            }}
            title="Logout"
          >
            <FiLogOut size={18} color="#dc3545" />
          </div>
        </>
      )}

      {/* 🔽 Render Child Page */}
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
