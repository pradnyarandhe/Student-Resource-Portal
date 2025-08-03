import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const userId = localStorage.getItem("userId");
  const [profile, setProfile] = useState({ name: "", mobile: "" });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}`);
        const data = await res.json();
        setProfile({ name: data.name, mobile: data.mobile });
      } catch (err) {
        console.error(" Failed to load user profile:", err);
      }
    };


    const fetchEnrollments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}/enrollments`);
        const data = await res.json();
        setCourses(data);  // This updates UI
      } catch (err) {
        console.error("Failed to load enrolled courses:", err);
      }
    }


    fetchUserProfile();
    fetchEnrollments();
  }, [userId]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:5000/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(res => res.json())
      .then(data => alert(data.message));
  };

  const handleDownloadCertificate = (courseTitle) => {
    const studentName = profile.name;
    const today = new Date().toLocaleDateString();

    const certificateContent = `
    Certificate of Completion
    This certifies that ${studentName}
    has successfully completed the course:
    ${courseTitle}
    Date: ${today}
  `;

    // Simple text PDF example
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write(`<pre>${certificateContent}</pre>`);
    pdfWindow.document.close();
    pdfWindow.print();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-start">User Profile</h2>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile:</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-5 mt-2" onClick={handleUpdate}>
            Update Profile
          </button>
        </div>
      </div>

      <hr className="my-5" />

      <div className="card shadow p-4">
        <h4 className="mb-3">Enrolled Courses</h4>
        {courses.length === 0 ? (
          <p className="text-muted">No courses enrolled yet.</p>
        ) : (
          <ul className="list-group">
            {courses.map((c, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row"
              >
                <div style={{ width: "100%" }}>
                  <strong>{c.title}</strong>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <span
                    className={`badge ${c.is_completed ? "bg-success" : "bg-warning text-dark"}`}
                  >
                    {c.is_completed ? "Completed" : "Ongoing"}
                  </span>
                  {c.is_completed && (
                    <button
                      className="btn btn-success mt-1"
                      style={{ fontSize: "12px", padding: "4px 8px", textAlign:"center" }}
                      onClick={() => handleDownloadCertificate(c.title)}
                    >
                      Download Certificate
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

        )}
      </div>
    </div>
  );
};

export default UserProfile;
