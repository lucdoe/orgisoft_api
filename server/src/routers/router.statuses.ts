import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readStatuses, readStatus } from '../controllers/controller.readMembers'

const router = express.Router()

router.get('/', accessToken, readStatuses)
router.get('/:id', accessToken, readStatus)

export default router
