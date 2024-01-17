import express from 'express'
import { getAllCommuninities, inputCommGroupToDB } from '../controllers/community.js'

const router = express.Router()

router.post('/inputcommunity', inputCommGroupToDB)

router.get('/', getAllCommuninities)

export default router