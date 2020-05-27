import express from 'express'
import { accessToken } from '../../helpers/authenticate'
import { readPositions, readPostion } from '../../controllers/member/read'

const router = express.Router()

router.get('/', accessToken, readPositions)
router.get('/:id', accessToken, readPostion)

export default router
