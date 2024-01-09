import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: [true, "Please provide a project title"],
      minLength: [4, "Project title is too short"],
      maxLength: [50, "Project title is too long"],
    },
    projectTags: {
      type: String,
      required: [true, "Please provide project tags"],
      minLength: [5, "Project tags are too short"],
      maxLength: [30, "Project tags are too long"],
    },
    toolsUsed: {
      type: String,
      required: [
        true,
        "Please provide a description of the software, hardware, and/or materials used",
      ],
      minLength: [5, "Description is too short"],
      maxLength: [100, "Description is too long"],
    },
    projectURL: {
      type: String,
      required: [true, "Please provide a project URL"],
      match: [
        /^(ftp|http|https):\/\/[^ "]+$/,
        "Invalid URL format. Please provide a valid URL.",
      ],
      unique: true,
    },
    projectDescription: {
      type: String,
      required: [true, "Please provide a project description"],
      minLength: [5, "Project description is too short"],
      maxLength: [500, "Project description is too long"],
    },
    uploadImage: {
      type: [String],
      required: false
    },
    uploadThumbnail: {
      type: [String],
      required: false
    },
    comments: {
      type: String,
      maxLength: [200, "Comments should be at most 200 characters"],
    },
  },
  { timestamps: true }
);

const projectPost =
  mongoose.models.projectPost || mongoose.model("projectPost", ProjectSchema);

export default projectPost;
