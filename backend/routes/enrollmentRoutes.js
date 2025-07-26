import express from "express";
import { enrollInCourse } from "../controllers/enrollController.js";
import { markCourseCompleted } from '../controllers/enrollController.js';

const router = express.Router();

router.post("/", enrollInCourse);
router.post("/complete", markCourseCompleted); 

export default router;
