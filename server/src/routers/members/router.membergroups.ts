import { Router } from 'express'
import { accessToken } from '../../middlewares/middleware.authenticate'
import { createMembergroup } from '../../controllers/members/controller.createMembers'
import { readMembergroups, readMembergroup } from '../../controllers/members/controller.readMembers'
import { updateMembergroups } from '../../controllers/members/controller.updateMembers'
import { deleteMembergroup } from '../../controllers/members/controller.deleteMembers'

// route: /membergroups
const router: Router = Router()

// create
router.post('/', accessToken, createMembergroup)

// read
router.get('/', accessToken, readMembergroups)
router.get('/:id', accessToken, readMembergroup)

// update
router.put('/:id', accessToken, updateMembergroups)

// delete
router.delete('/:id', accessToken, deleteMembergroup)

export default router
