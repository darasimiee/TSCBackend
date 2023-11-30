import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import {
  getAllProject,
  createProject,
  editProject,
  deleteProject,
  eachProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Apply verifyToken middleware to routes that require authentication
router.get("/", verifyToken, getAllProject);

router.post("/create", verifyToken, createProject);

router.patch("/:id", verifyToken, editProject);

router.delete("/:id", verifyToken, deleteProject);

router.get("/:id", verifyToken, eachProject);

export default router;
