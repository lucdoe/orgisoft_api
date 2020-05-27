import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readPositions, readPostion } from '../controllers/controller.readMembers'

const router = express.Router()

router.get('/', accessToken, readPositions)
router.get('/:id', accessToken, readPostion)

export default router
