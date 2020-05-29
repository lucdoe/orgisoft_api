import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readPositions, readPostion } from '../controllers/controller.readMembers'
import { createPosition } from '../controllers/controller.createMembers'

const router = express.Router()

router.get('/', accessToken, readPositions)
router.get('/:id', accessToken, readPostion)

router.post('/', accessToken, createPosition)

export default router
