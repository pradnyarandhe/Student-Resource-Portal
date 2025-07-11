// ✅ Register API
app.post("/api/users/register", (req, res) => {
  const { name, mobile, password } = req.body;

  const sql = "INSERT INTO users (name, mobile, password) VALUES (?, ?, ?)";
  db.query(sql, [name, mobile, password], (err, result) => {
    if (err) {
      console.error("❌ Registration Error:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.status(201).json({ message: "User registered", userId: result.insertId });
  });
});
