import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../data/coursesData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];
  const certificateRef = useRef();

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});

  if (!course) return <div>Course not found.</div>;

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

  const handleNext = () => {
    if (!isQuizCompleted) return;
    if (!completedModules.includes(currentModule.id)) {
      setCompletedModules([...completedModules, currentModule.id]);
    }
    if (!isLastModule) {
      setCurrentModuleIndex(currentModuleIndex + 1);
    }
  };

  const studentName = localStorage.getItem("name") || "Student Name";
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
    <div className="container mt-5">
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <div className="card mb-4">
        <div className="card-body">
          <h4>{currentModule.title}</h4>
          <video width="100%" controls src={currentModule.videoUrl}></video>
          <p className="mt-3">{currentModule.content}</p>

          <h5 className="mt-4 text-start">Quiz:</h5>
          {currentModule.quiz.map((q, qIdx) => (
            <div key={qIdx}>
              <p>{q.question}</p>
              {q.options.map((opt, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    name={`quiz-${currentModule.id}-${qIdx}`}
                    onChange={() => handleAnswer(qIdx, opt)}
                    checked={quizAnswers[`${currentModule.id}-${qIdx}`] === opt}
                  />{" "}
                  {opt}
                </div>
              ))}
            </div>
          ))}

          <button
            className="btn btn-primary mt-4"
            onClick={handleNext}
            disabled={!isQuizCompleted || completedModules.includes(currentModule.id)}
          >
            {isLastModule ? "Finish" : "Next Module"}
          </button>
        </div>
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
            className="btn btn-success mt-3"
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
