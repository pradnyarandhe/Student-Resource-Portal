import db from '../config/db.js';

export const enrollInCourse = (req, res) => {
  console.log("📥 Incoming enroll request:", req.body);  // ✅ LOG HERE

  const { userId, courseId } = req.body;

  if (!userId || !courseId) {
    console.error("❌ Missing userId or courseId");
    return res.status(400).json({ message: "Missing userId or courseId" });
  }

  const checkSql = "SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?";
  db.query(checkSql, [userId, courseId], (err, result) => {
    if (err) {
      console.error("❌ Enrollment check error:", err);
      return res.status(500).json({ message: "Server error during check" });
    }

    if (result.length > 0) {
      console.log("⚠️ Already enrolled");
      return res.status(409).json({ message: "Already enrolled" });
    }

    const insertSql = "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)";
    db.query(insertSql, [userId, courseId], (err2, result2) => {
      if (err2) {
        console.error("❌ Enrollment insert error:", err2);
        return res.status(500).json({ message: "Enrollment failed" });
      }

      console.log("✅ Enrolled successfully:", result2);
      res.status(201).json({ message: "Enrolled successfully" });
    });
  });
};

export const markCourseComplete = (req, res) => {
  const { userId, courseId } = req.body;

  if (!userId || !courseId) {
    return res.status(400).json({ message: "User ID and Course ID required" });
  }

  const sql = "UPDATE enrollments SET is_completed = true WHERE user_id = ? AND course_id = ?";
  db.query(sql, [userId, courseId], (err, result) => {
    if (err) {
      console.error("Error updating enrollment:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Course marked as completed" });
  });
};
