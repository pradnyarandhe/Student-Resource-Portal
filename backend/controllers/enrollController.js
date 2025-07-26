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

export const markCourseCompleted = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
      return res.status(400).json({ message: "User ID and Course ID required" });
    }

    const [result] = await db.execute(
      "UPDATE enrollments SET is_completed = 1 WHERE user_id = ? AND course_id = ?",
      [userId, courseId]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Course marked as completed" });
    } else {
      res.status(404).json({ message: "Enrollment not found" });
    }
  } catch (err) {
    console.error("Error marking course completed:", err);
    res.status(500).json({ message: "Server error" });
  }
};

