import { Router } from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readPositions, readPostion } from '../controllers/controller.readMembers'
import { createPosition } from '../controllers/controller.createMembers'
import { deletePosition } from '../controllers/controller.deleteMembers'
import { updatePosition } from '../controllers/controller.updateMembers'

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
