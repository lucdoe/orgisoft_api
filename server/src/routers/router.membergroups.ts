import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readMembergroups, readMembergroup } from '../controllers/controller.readMembers'
import { createMembergroup } from '../controllers/controller.createMembers'

const router = express.Router()

router.get('/', accessToken, readMembergroups)
router.get('/:id', accessToken, readMembergroup)

router.post('/', accessToken, createMembergroup)

export default router
