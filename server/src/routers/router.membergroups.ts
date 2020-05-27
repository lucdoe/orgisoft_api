import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readMembergroups, readMembergroup } from '../controllers/controller.readMembers'

const router = express.Router()

router.get('/', accessToken, readMembergroups)
router.get('/:id', accessToken, readMembergroup)

export default router
