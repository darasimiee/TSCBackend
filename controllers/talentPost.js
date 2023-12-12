import talentPost from "../models/talentPost.js";
import { customError } from "../config/error.js";

//  Get all Jobs
export const getJobs = async (req, res) => {
  console.log(req);
  try {
    const jobs = await talentPost.find({ user: req.user.id });
    res.status(200).json(jobs);
    if (jobs.length === 0) {
      return res.status(200).json({ message: "You have no jobs yet." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Add jobPost
export const createJob = async (req, res) => {
  try {
    const { jobTitle, jobLocation, jobPosition, experienceLevel, payRange, jobDescription, minimumQualification, newSkills, newTools } =
      req.body;
    console.log(
      req.jobTitle,
      jobLocation,
      jobPosition,
      experienceLevel,
      payRange
    );
    const job = job({
      user: req.user.id,
      jobTitle,
      jobLocation,
      jobPosition,
      experienceLevel,
      payRange,
    });
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json(customError(400, "Error adding job"));
  }
};

// Edit Job

export const editJob = async (req, res) => {
  const updatedData = req.body;
  const id = req.params.id;
  try {
    const updatedJob = await talentPost.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete Jobs
export const deleteJobs = async (req, res) => {
  try {
    await talentPost.findByIdAndRemove(req.params.id);
    res.status(200).json("Job deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
