import express, {json} from "express"
import cors from "cors"
import { config } from "dotenv"
import { connectToDB } from "./config/mongodb.js"
import authRoutes from "./routes/auth.js"



const app = express()
config()

app.use(json())
app.use(cors())
app.disable("x-powered-by")

//Endpoints
app.use('/api/v1/auth', authRoutes)

app.use((err, req, res) =>
{
  const status = err.status || 500
  const message = err.message || "Something went wrong"
  return res.status(status).json({
    success: false,
    status, message
  })
})

const PORT = process.env.PORT || 5000

connectToDB().then(() =>
{
  try 
  {
    app.listen(PORT, ()=>{
      console.log(`Server is connected to port ${PORT}`)
    })
  } catch (error)
   {
    console.log("Could not connect to server");
  }
}).catch((error) =>
{
  console.log("Invalid database connection.");
})
