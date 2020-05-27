import express from 'express'
import { accessToken } from '../../helpers/authenticate'
import { readMembergroups, readMembergroup } from '../../controllers/member/read'

const router = express.Router()

router.get('/', accessToken, readMembergroups)
router.get('/:id', accessToken, readMembergroup)

export default router
