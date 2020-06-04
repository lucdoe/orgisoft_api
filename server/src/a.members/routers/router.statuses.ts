import { Router } from 'express'
import { accessToken } from '../../b.globals/middlewares/middleware.authenticate'
import { createStatus } from '../controllers/controller.createMembers'
import { readStatuses, readStatus } from '../controllers/controller.readMembers'
import { updateStatus } from '../controllers/controller.updateMembers'
import { deleteStatus } from '../controllers/controller.deleteMembers'

// route: /statuses
const router: Router = Router()

// create
router.post('/', accessToken, createStatus)

// read
router.get('/', accessToken, readStatuses)
router.get('/:id', accessToken, readStatus)

// update
router.put('/:id', accessToken, updateStatus)

// delete
router.delete('/:id', accessToken, deleteStatus)

export default router
