import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import { createMemberqualification } from '../controllers/controller.createMembers'
import { readMemberqualifications, readMemberqualification } from '../controllers/controller.readMembers'
import { updateMemberqualification } from '../controllers/controller.updateMembers'
import { deleteMemberqualification } from '../controllers/controller.deleteMembers'

// route: /memberqualifications
const router: Router = Router()

// create
router.post('/', accessToken, createMemberqualification)

// read
router.get('/', accessToken, readMemberqualifications)
router.get('/:id', accessToken, readMemberqualification)

// update
router.put('/:id', accessToken, updateMemberqualification)

// delete
router.delete('/:id', accessToken, deleteMemberqualification)

export default router
