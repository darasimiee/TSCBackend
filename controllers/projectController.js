import Task from "../models/projectPost.js";
import validateID from "../utils/validateID.js";

export const getAllProject = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      projectTitle,
      projectTags,
      toolsUsed,
      projectURL,
      projectDescription,
      uploadImage,
      uploadThumbnail,
      comments,
    } = req.body;

    if (
      !projectTitle ||
      !projectDescription ||
      !projectTags ||
      !toolsUsed ||
      !projectURL ||
      !uploadImage ||
      !uploadThumbnail ||
      !comments
    ) {
      return res
        .status(400)
        .json({ message: "Please Provide All required information" });
    }

    const task = await Task.create(req.body);
    res
      .status(201)
      .json({ message: "Task created Successfully", newTask: task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editProject = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.status(200).json({ message: "Task Updated Successfully" });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID: ${id}` });
  }

  res.status(200).json({ message: "Task Successfully Deleted" });
};

export const eachProject = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOne({ _id: id });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID:${id}` });
  }

  res.status(200).json({ task });
};
