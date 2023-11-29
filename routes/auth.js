import express from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { registerUser, loginUser } from "../controllers/auth.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router