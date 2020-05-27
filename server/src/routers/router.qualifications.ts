import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readQualifications, readQualification } from '../controllers/controller.readMembers'

const router = express.Router()

router.get('/', accessToken, readQualifications)
router.get('/:id', accessToken, readQualification)

export default router
