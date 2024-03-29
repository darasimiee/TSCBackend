import mongoose from "mongoose";

const JobAlertsSchema = mongoose.Schema(
  {
    jobPosition: {
      type: String,
      required: true,
      enum: [
        "Select position",
        "Senior Web Development",
        "Intern Product Designer",
        "Data Analyst",
      ],
      default: "Select position",
    },
    companyName: {
      type: String,
      required: [true, "Company Name is required"],
      minLength: [3, "Company Name is too short"],
      maxLength: [30, "Company Name is too Long"],
    },
    keyRequirement: {
      type: String,
      required: [true, "Key Requirement is required"],
      minLength: [3, "Key Requirement is too short"],
      maxLength: [90, "Key Requirement is too Long"],
    },
    jobLink: {
      type: String,
      required: true,
      match: [
        /^(ftp|http|https):\/\/[^ "]+$/,
        "Invalid URL format. Please provide a valid URL.",
      ],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      minLength: [3, "Location is too short"],
      maxLength: [30, "Location is too Long"],
    },
    jobType: {
      type: String,
      required: true,
      enum: ["Remote", "On-Site", "Hybrid"],
      default: null, // Set an appropriate default value
    },
    jobDescription: {
      type: String,
      required: [true, "Please provide a project description"],
      minLength: [5, "Project description is too short"],
      maxLength: [500, "Project description is too long"],
    },
  },
  { timestamps: true }
);

const jobAlerts =
  mongoose.models.jobAlerts || mongoose.model("jobAlerts", JobAlertsSchema);

export default jobAlerts;
