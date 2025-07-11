import db from "../config/db.js"; // ✅ Make sure this file exists and exports a connected db object

export const registerUser = (req, res) => {
  const { name, mobile, password } = req.body;
  const sql = "INSERT INTO users (name, mobile, password) VALUES (?, ?, ?)";

  db.query(sql, [name, mobile, password], (err, result) => {
    if (err) {
      console.error("❌ DB Error:", err);
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
      res.status(200).json({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
};
