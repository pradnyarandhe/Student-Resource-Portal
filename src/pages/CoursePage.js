import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../data/coursesData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];
  const certificateRef = useRef(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [studentName, setStudentName] = useState("Student Name");

  const currentModule = course.modules[currentModuleIndex];
  const isLastModule = currentModuleIndex === course.modules.length - 1;

  const handleAnswer = (questionIndex, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [`${currentModule.id}-${questionIndex}`]: answer,
    });
  };

  const isQuizCompleted = currentModule.quiz.every((q, idx) =>
    quizAnswers.hasOwnProperty(`${currentModule.id}-${idx}`)
  );

  const handleNext = async () => {
    const userId = localStorage.getItem("userId");
    const courseId = course.id;

    if (!isQuizCompleted) return;

    if (!completedModules.includes(currentModule.id)) {
      setCompletedModules([...completedModules, currentModule.id]);
    }

    if (isLastModule) {
      try {
        const response = await fetch("http://localhost:5000/api/enroll/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: Number(userId), courseId: Number(courseId) }),
        });

        const result = await response.json();
        console.log(result.message);
      } catch (err) {
        console.error("Failed to mark course as completed", err);
      }
    } else {
      setCurrentModuleIndex(currentModuleIndex + 1);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`http://localhost:5000/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setStudentName(data.name || "Student Name");
        })
        .catch(() => setStudentName("Student Name"));
    }
  }, []);

  const today = new Date().toLocaleDateString();

  const handleDownloadCertificate = () => {
    if (!certificateRef.current) return;
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      const imgWidth = 280;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`${course.title}_Certificate.pdf`);
    });
  };

  return (
    <div className="container mt-4 ">
      <h2 className="text-light">{course.title}</h2>
      <p className="text-light">{course.description}</p>

      <div
        className="mb-4 p-4 mt-5"
        style={{
          borderRadius: "12px",
          boxShadow: "0 0 10px #282c34",
          color: "#fff",
        }}
      >
        <h4>{currentModule.title}</h4>
        {/* <div style={{ justifyContent: "left", margin: "20px 0" }}>
          <video
            width="80%" // or "720" for fixed width
            style={{ borderRadius: "8px", maxWidth: "720px", boxShadow: "0 0 12px rgba(0,0,0,0.5)" }}
            controls
            src={currentModule.videoUrl}
          ></video>
        </div> */}
        <p className="mt-3" style={{ whiteSpace: "pre-line" }}>{currentModule.content}</p>

        <h5 className="mt-4">Quiz:</h5>
        {currentModule.quiz.map((q, qIdx) => (
          <div key={qIdx} className="mb-3">
            <p>{q.question}</p>
            {q.options.map((opt, i) => (
              <div key={i}>
                <label>
                  <input
                    type="radio"
                    name={`quiz-${currentModule.id}-${qIdx}`}
                    onChange={() => handleAnswer(qIdx, opt)}
                    checked={quizAnswers[`${currentModule.id}-${qIdx}`] === opt}
                    className="me-2"
                  />
                  {opt}
                </label>
              </div>
            ))}
          </div>
        ))}

        <button
          className="btn btn-primary mt-3"
          onClick={handleNext}
          disabled={!isQuizCompleted}
        >
          {isLastModule ? "Finish Course" : "Next Module"}
        </button>
      </div>

      {completedModules.length === course.modules.length && (
        <div className="text-center">
          <div
            ref={certificateRef}
            style={{
              width: "1000px",
              height: "700px",
              padding: "40px",
              textAlign: "center",
              border: "10px solid #1e88e5",
              backgroundColor: "#fefefe",
              margin: "40px auto",
              fontFamily: "Georgia, serif",
              color: "#333",
            }}
          >
            <h1 style={{ marginTop: "50px", fontSize: "40px" }}>
              Certificate of Completion
            </h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              This certifies that
            </p>
            <h2 style={{ fontSize: "28px", marginTop: "10px" }}>{studentName}</h2>
            <p style={{ fontSize: "20px", marginTop: "20px" }}>
              has successfully completed the course:
            </p>
            <h2 style={{ fontSize: "26px", marginTop: "10px" }}>{course.title}</h2>
            <p style={{ fontSize: "18px", marginTop: "30px" }}>Date: {today}</p>
            <p style={{ fontSize: "16px", marginTop: "40px" }}>Instructor Signature</p>
            <hr style={{ width: "200px", margin: "0 auto" }} />
          </div>

          <button
            className="btn btn-success mt-2"
            style={{ fontSize: "14px", padding: "8px 16px" }}
            onClick={handleDownloadCertificate}
          >
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
