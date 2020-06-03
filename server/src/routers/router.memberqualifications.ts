import express from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { createMemberqualification } from '../controllers/controller.createMembers'
import { readMemberqualifications, readMemberqualification } from '../controllers/controller.readMembers'
import { updateMemberQualification } from '../controllers/controller.updateMembers'
import { deleteMemberqualification } from '../controllers/controller.deleteMembers'

const router = express.Router()

// create
router.post('/', accessToken, createMemberqualification)

// read
router.get('/', accessToken, readMemberqualifications)
router.get('/:id', accessToken, readMemberqualification)

// update
router.put('/:id', accessToken, updateMemberQualification)

// delete
router.delete('/:id', accessToken, deleteMemberqualification)

export default router
