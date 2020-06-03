import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { readStatuses, readStatus } from '../controllers/controller.readMembers'
import { createStatus } from '../controllers/controller.createMembers'
import { updateStatus } from '../controllers/controller.updateMembers'
import { deleteStatus } from '../controllers/controller.deleteMembers'

const router = express.Router()

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
