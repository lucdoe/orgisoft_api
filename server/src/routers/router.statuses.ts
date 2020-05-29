import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readStatuses, readStatus } from '../controllers/controller.readMembers'
import { createStatus } from '../controllers/controller.createMembers'

const router = express.Router()

router.get('/', accessToken, readStatuses)
router.get('/:id', accessToken, readStatus)

router.post('/', accessToken, createStatus)

export default router
