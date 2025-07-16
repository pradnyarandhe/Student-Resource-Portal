import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const resources = [
  {
    title: "MCA Syllabus",
    description: "Download Syllabus",
    link: "/resources/mca/mcasyllabus.pdf"
  },
  {
    title: "Previous Year Question Papers",
    description: "Download last 5 years' MCA question papers.",
    route: "/resources/mca/pyqp"
  },
  {
    title: "Books in PDF Format",
    description: "Reference books for all MCA subjects.",
    route: "/resources/mca/books"
  }
];

const courses = [
  {
    id: 1,  // Add course ID for enrollment
    title: "Cyber Security",
    description: "Learn Cyber Security",
    route: "/courses/mca/cybersecurity"
  },
  {
    id: 2,
    title: "Mysql",
    description: "Master MySQL",
    route: "/courses/mca/mysql"
  }
];

const McaResources = () => {
  const navigate = useNavigate();

 const handleEnroll = async (courseId, route) => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Please login to enroll.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: Number(userId), courseId })
    });

    const text = await response.text(); // <-- get raw text
    console.log("📤 Raw backend response:", text);

    const data = JSON.parse(text); // try parse manually

    if (response.ok) {
      alert("Enrolled successfully!");
      navigate(route);
    } else {
      if (data.message === "Already enrolled") {
        alert("You are already enrolled in this course.");
        navigate(route);
      } else {
        alert(data.message || "Enrollment failed");
      }
    }
  } catch (error) {
    console.error("Enrollment error:", error);
    alert("Enrollment failed due to server error.");
  }
};
;


  return (
    <div className="container mt-5">
      <h2 className="text-left mb-4">MCA Resources</h2>
      <div className="row">
        {resources.map((res, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{res.title}</Card.Title>
                <Card.Text>{res.description}</Card.Text>
                <div className="mt-3 d-flex justify-content-between">
                  <Button className="btn create-btn" variant="primary" onClick={() => navigate(res.route)}>
                    Download
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="container mt-5">
        <h4 className="text-left mb-4">Online Certifications</h4>
        <div className="row">
          {courses.map((res, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{res.title}</Card.Title>
                  <Card.Text>{res.description}</Card.Text>
                  <div className="mt-3 d-flex justify-content-between">
                    <Button
                      className="btn create-btn"
                      variant="primary"
                      onClick={() => handleEnroll(res.id, res.route)}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default McaResources;
