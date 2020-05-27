import express from 'express'
import { accessToken } from '../../helpers/authenticate'
import { readStatuses, readStatus } from '../../controllers/member/read'

const router = express.Router()

router.get('/', accessToken, readStatuses)
router.get('/:id', accessToken, readStatus)

export default router
