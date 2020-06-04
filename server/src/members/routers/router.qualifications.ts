import { Router } from 'express'
import { accessToken } from '../../middlewares/middleware.authenticate'
import { createQualification } from '../../controllers/members/controller.createMembers'
import { readQualifications, readQualification } from '../../controllers/members/controller.readMembers'
import { updateQualification } from '../../controllers/members/controller.updateMembers'
import { deleteQualification } from '../../controllers/members/controller.deleteMembers'

// route: /qualifications
const router: Router = Router()

// create
router.post('/', accessToken, createQualification)

// read
router.get('/', accessToken, readQualifications)
router.get('/:id', accessToken, readQualification)

// update
router.put('/:id', accessToken, updateQualification)

// delete
router.delete('/:id', accessToken, deleteQualification)

export default router
