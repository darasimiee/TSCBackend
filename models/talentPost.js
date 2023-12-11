import mongoose from "mongoose";

const TalentPostSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Please provide a Job Title"],
    minLength: [3, "Job Title is too short"],
  },
  jobLocation: {
    type: String,
    required: [true, "Please provide a Job Location"],
    minLength: [3, "Job Location is too short"],
  },
  jobPosition: {
    type: String,
    required: true,
    enum: ["Select position", "Data Analysis", "Web Development", "Product Design"],
    default: "Select position",
  },
  experienceLevel: {
    type: String,
    required: true,
    enum: [
      "Entry Level (0-2 Years)",
      "Intermediate Level (2-5 Years)",
      "Senior Level (5+ Years)",
    ],
  },
  jobDescription: {
    type: String,
    maxLength: [2000, "Job Description should be at most 2000 characters"],
    required: true,
  },
  minimumQualification: {
    type: String,
    maxLength: [
      2000,
      "Minimum Qualification should be at most 2000 characters",
    ],
    required: true,
  },
  newSkills: {
    type: [String],
    required: true,

  },
  newTools: {
    type: [String],
    required: false,
  },
  responsibilities: {
    type: String,
    maxLength: [2000, "Responsibilities should be at most 2000 characters"],
    required: true
  },
  payRange: {
    type: String,
    required: true,
    enum: [
      "150,000 - 250,000",
      "250,000 - 350,000",
      "350,000 - 450,000",
      "450,000 - 650,000",
      "650,000 - 750,000",
    ],
    default: "150,000 - 250,000"
  },
  applicationDeadline: {
    type: String,
    required: true,
    enum: [
      "2-3 Weeks",
      "1 Month",
      "2 Months",
      "3 Months",
      "4 Months",
      "5 Months",
    ],
    default: "2-3 Weeks"
  },
});

const talentPost =
  mongoose.models.talentPost || mongoose.model("TalentPost", TalentPostSchema);

export default talentPost;
