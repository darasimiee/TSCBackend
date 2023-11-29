import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileImg: {
      type: [String],
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    communityGroup: {
      type: String,
      required: true,
      enum: ["Select Community", "Data Analysis", "Web Development", "Product Design"],
      default: "Select Community"
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Invalid email format",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    
    followers: {
      type: [String],
      default: [],
    },

    mobileNumber: {
      type: String,
      required: false,
    },
    cohort: {
      type: String,
      required: false,
    },
    linkedinURL: {
      type: String,
      required: false,
      
    },
    portfolioURL: {
      type: String,
      required: false,
      
    },
    aboutMe: {
      type: String,
      maxLength: [1000, "About Me should be at most 1000 characters"],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
