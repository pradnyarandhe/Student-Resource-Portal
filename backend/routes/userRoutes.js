import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { getUserById } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";
import { getUserEnrollments } from "../controllers/userController.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);   
router.put("/:id", updateUser);
router.get("/:id/enrollments", getUserEnrollments); 



export default router;
