import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import { createQualification } from '../controllers/controller.createMembers'
import { readQualifications, readQualification } from '../controllers/controller.readMembers'
import { updateQualification } from '../controllers/controller.updateMembers'
import { deleteQualification } from '../controllers/controller.deleteMembers'

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
