import express from "express";
import {
  getJobAlert,
  createJobAlert,
  editJobAlert,
  deleteJobAlert,
  eachJobAlert,
} from "../controllers/jobAlertController.js";

const router = express.Router();

router.get("/", getJobAlert);
router.post("/create", createJobAlert);
router.patch("/edit/:id", editJobAlert);
router.delete("/delete/:id", deleteJobAlert);
router.get("/each/:id", eachJobAlert);

export default router;
