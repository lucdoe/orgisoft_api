import express from 'express'
import { accessToken } from '../../helpers/authenticate'
import { readQualifications, readQualification } from '../../controllers/member/read'

const router = express.Router()

router.get('/qualifications', accessToken, readQualifications)
router.get('/qualifications/:id', accessToken, readQualification)

export default router
