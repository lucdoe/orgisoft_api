import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readQualifications, readQualification } from '../controllers/controller.readMembers'
import { createQualification } from '../controllers/controller.createMembers'

const router = express.Router()

router.get('/', accessToken, readQualifications)
router.get('/:id', accessToken, readQualification)

router.post('/', accessToken, createQualification)

export default router
