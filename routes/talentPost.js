import express from "express";
import {
  createJob,
  editJob,
  deleteJobs,
  getJobs,
} from "../controllers/talentPost.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/create", createJob);
router.patch("/edit/:id", editJob);
router.delete("/delete/:id", deleteJobs);

export default router;
