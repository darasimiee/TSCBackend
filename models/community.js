import mongoose from "mongoose";

const communitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },

    cohort: {
      type: String,
      required: true,
      
    },

    communityGroup: {
      type: String,
      required: true,
      enum: [
        "Select Community",
        "Data Analysis",
        "Web Development",
        "Product Design",
      ],
      default: "Web Development",
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
  },
  {
    timestamps: true,
  }
);

const Community = mongoose.model("Community", communitySchema);
export default Community;
