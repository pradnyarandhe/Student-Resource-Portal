import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); 
app.use("/api/enroll", enrollmentRoutes);
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

