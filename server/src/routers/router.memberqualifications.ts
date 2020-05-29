import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { createMemberQualification } from '../controllers/controller.createMembers'

const router = express.Router()

router.post('/', accessToken, createMemberQualification)

export default router
