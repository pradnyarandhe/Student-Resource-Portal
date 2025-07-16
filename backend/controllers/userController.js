import db from "../config/db.js"; // ✅ Make sure this file exists and exports a connected db object

export const registerUser = (req, res) => {
  const { name, mobile, password } = req.body;
  const sql = "INSERT INTO users (name, mobile, password) VALUES (?, ?, ?)";

  db.query(sql, [name, mobile, password], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Failed to register" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

export const loginUser = (req, res) => {
  const { mobile, password } = req.body;
  const sql = "SELECT * FROM users WHERE mobile = ? AND password = ?";

  db.query(sql, [mobile, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length > 0) {
      const user = results[0];
      return res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          mobile: user.mobile
        }
      });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
};


export const getUserById = (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT id, name, mobile FROM users WHERE id = ?";

  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(results[0]);
  });
};


export const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, mobile } = req.body;

  const sql = "UPDATE users SET name = ?, mobile = ? WHERE id = ?";
  db.query(sql, [name, mobile, userId], (err, result) => {
    if (err) return res.status(500).json({ message: "Failed to update profile" });

    return res.status(200).json({ message: "Profile updated successfully" });
  });
};

export const getUserEnrollments = (req, res) => {
  const userId = req.params.id;

  const sql = `
    SELECT c.id, c.title, e.is_completed
    FROM enrollments e
    JOIN courses c ON e.course_id = c.id
    WHERE e.user_id = ?
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("❌ Fetch Enrollments Error:", err);
      return res.status(500).json({ message: "Failed to fetch enrollments" });
    }
    res.status(200).json(results);
  });
};
