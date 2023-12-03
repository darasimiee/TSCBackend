import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectToDB } from "./config/mongodb.js";
import authRoutes from "./routes/auth.js";
import projectRouter from "./routes/projectRouter.js";
import talentPostRoutes from "./routes/talentPost.js"

const app = express();
config();

app.use(json());
app.use(cors());
app.disable("x-powered-by");

//Endpoints
app.use("/api/v1/auth", authRoutes);
app.use("/api/v2/route", projectRouter);
app.use("/api/v1/jobPost", talentPostRoutes);

app.use((err, req, res) => {
  const status = err.status || 5000;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const PORT = process.env.PORT || 7000

connectToDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is connected to port ${PORT}`);
      });
    } catch (error) {
      console.log("Could not connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection.");
  });
