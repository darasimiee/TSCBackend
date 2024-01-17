import jobAlerts from "../models/jobAlerts.js";
import validateID from "../utils/validateID.js";

// Get jobAlerts

export const getJobAlert = async (req, res) => {
  try {
    const alerts = await jobAlerts.find({});
    res.status(200).json({ alerts });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", error: error.message });
  }
};

//create jobAlerts

export const createJobAlert = async (req, res) => {
  try {
    const {
      jobPosition,
      companyName,
      keyRequirement,
      jobLink,
      location,
      jobType,
      jobDescription,
    } = req.body;

    if (
      !jobPosition ||
      !companyName ||
      !keyRequirement ||
      !jobLink ||
      !location ||
      !jobType ||
      !jobDescription
    ) {
      return res.status(400).json({
        message: "Please provide all required information",
      });
    }

    const newJobAlert = new jobAlerts(req.body);
    const savedAlert = await newJobAlert.save();
    res
      .status(201)
      .json({ message: "Job Created Sucessfully", newAlert: savedAlert });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Job Alerts",
      error: error.message,
    });
  }
};

//edit jobAlert
export const editJobAlert = async (req, res) => {
  const updatedData = req.body;
  const id = req.params.id;
  try {
    const updatedJob = await jobAlerts.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete Jobs
export const deleteJobAlert = async (req, res) => {
  const { id } = req.params;

  try {
    if (!validateID(id)) {
      return res.status(400).json({ message: `ID: ${id} is not valid` });
    }

    const alerts = await jobAlerts.findOneAndDelete({ _id: id });

    if (!alerts) {
      return res.status(404).json({ message: `No Task with ID: ${id}` });
    }

    res.status(200).json({ message: "Job Successfully Deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Job Alert", error: error.message });
  }
};

//each Jobs

export const eachJobAlert = async (req, res) => {
  const { id } = req.params;

  try {
    if (!validateID(id)) {
      return res.status(400).json({ message: `ID: ${id} is not valid` });
    }

    const alerts = await jobAlerts.findOneAndDelete({ _id: id });

    if (!alerts) {
      return res.status(404).json({ message: `No Task with ID:${id}` });
    }

    res.status(200).json({ alerts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Getting Job Alert", error: error.message });
  }
};
