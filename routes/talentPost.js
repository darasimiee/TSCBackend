import express from "express";
import {
  createJob,
  editJob,
  deleteJobs,
  getJobs,
} from "../controllers/talentPost";

const router = express.Router();

router.get("/jobs", getJobs);
router.post("/create", createJob);
router.patch("/edit/:id", editJob);
router.delete("/delete/:id", deleteJobs);

export default router;
