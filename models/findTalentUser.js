import mongoose from "mongoose";

const TalentUserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    minLength: [3, "Username is too short"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  companyName: {
    type: String,
    required: [true, "Please provide a Company Name"],
    minLength: [2, "Company Name is too short"],
  },
  role: {
    type: String,
    required: [true, "Please provide What role you would want to fill"],
    minLength: [3, "Role Name is too short"],
  },
});

const findTalentPost =
  mongoose.models.findTalentPost ||
  mongoose.model("FindTalentUser", TalentUserSchema);

export default findTalentPost;
