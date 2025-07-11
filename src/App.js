import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedLayout from "./components/ProtectedLayout";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import McaResources from "./components/McaResources";
import MscResources from "./components/MscResources";
import PgdcsResources from "./components/PgdcsResources";
import PgdcaResources from "./components/PgdcaResources";
import PreviousPapersMCA from "./pages/PreviousPapersMCA";
import BooksMCA from "./pages/BooksMCA";
import CoursePage from "./pages/CoursePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Protected Routes with Shared Layout */}
        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DepartmentDashboard />} />
          <Route path="/department/mca" element={<McaResources />} />
          <Route path="/department/msc" element={<MscResources />} />
          <Route path="/department/pgdcs" element={<PgdcsResources />} />
          <Route path="/department/pgdca" element={<PgdcaResources />} />
          <Route path="/resources/mca/pyqp" element={<PreviousPapersMCA />} />
          <Route path="/resources/mca/books" element={<BooksMCA />} />
          <Route path="/courses/mca/:courseId"element={<CoursePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
