import { Router } from 'express'
import { accessToken } from '../../middlewares/middleware.authenticate'
import { createPosition } from '../../controllers/members/controller.createMembers'
import { readPositions, readPostion } from '../../controllers/members/controller.readMembers'
import { updatePosition } from '../../controllers/members/controller.updateMembers'
import { deletePosition } from '../../controllers/members/controller.deleteMembers'

// route: /positions
const router: Router = Router()

// create
router.post('/', accessToken, createPosition)

// read
router.get('/', accessToken, readPositions)
router.get('/:id', accessToken, readPostion)

// update
router.put('/:id', accessToken, updatePosition)

// delete
router.delete('/:id', accessToken, deletePosition)

export default router
