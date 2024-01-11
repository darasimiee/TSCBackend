import jobAlerts from "../models/jobAlerts"

// Get jobAlerts

export const getJobAlert = async (req, res)=>{
    try {
        const alerts =  await jobAlerts.find({user: req.user.id})
        res.status(200).json(alerts)
        if (alerts.length === 0){
            return res.status(200).json({message:"No Job Alerts Yet"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


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
            jobDesciption
        } = req.body;
        if (
            !jobPosition ||
            !companyName ||
            !keyRequirement ||
            !jobLink ||
            !location ||
            !jobType ||
            !jobDesciption
        ) {
            return res.status(400).json({
                message: "Please provide all required information"
            });
        }

        const newJobAlert = new jobAlerts(req.body);
        const savedAlert = await newJobAlert.save();
        res.status(201).json(savedAlert);
    } catch (error) {
        res.status(500).json({
            message: "Error creating Job Alerts"
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
    try {
      await jobAlerts.findByIdAndRemove(req.params.id);
      res.status(200).json("Job deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  