import { express } from "express";
import { getJobAlert, createJobAlert, editJobAlert, deleteJobAlert } from "../controllers/jobAlertController";

const router = express.Router();

router.get("/jobAlerts", getJobAlert);
router.post("/create", createJobAlert);
router.patch("/edit/:id", editJobAlert);
router.delete("/delete/:id",deleteJobAlert );

export default router;
