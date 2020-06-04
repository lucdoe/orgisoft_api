import { Router } from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import * as memberCreateContrls from '../controllers/controller.createMembers'
import * as memberReadContrls from '../controllers/controller.readMembers'
import * as memberUpdateContrls from '../controllers/controller.updateMembers'
import * as memberDeleteContrls from '../controllers/controller.deleteMembers'

// route: /members
const router: Router = Router()

// create
router.post('/', accessToken, memberCreateContrls.createMember)

// read
router.get('/', accessToken, memberReadContrls.readMembers)
router.get('/:id', accessToken, memberReadContrls.readMember)
router.get('/:id/statuses', accessToken, memberReadContrls.readMemberStatus)
router.get('/:id/positions', accessToken, memberReadContrls.readMemberPosition)
router.get('/:id/groups', accessToken, memberReadContrls.readMemberGroup)
router.get('/:id/qualifications', accessToken, memberReadContrls.readMemberqualifications)
router.get('/:id/addresses', accessToken, memberReadContrls.readMemberAddress)
router.get('/:id/inventoryitems', accessToken, memberReadContrls.readMemberinventoryitem)

// update
router.put('/:id', accessToken, memberUpdateContrls.updateMember)
router.put('/:id/statuses', accessToken, memberUpdateContrls.updateMemberStatus)
router.put('/:id/positions', accessToken, memberUpdateContrls.updateMemberPosition)
router.put('/:id/groups', accessToken, memberUpdateContrls.updateMemberMembergroup)
// redo
router.put('/:id/qualifications', accessToken, memberUpdateContrls.updateMemberqualification)
router.put('/:id/addresses', accessToken, memberUpdateContrls.updateMemberAddress)

// delete
router.delete('/:id', accessToken, memberDeleteContrls.deleteMember)
router.delete('/:id/statuses', accessToken, memberDeleteContrls.deleteMemberStatus)
router.delete('/:id/positions', accessToken, memberDeleteContrls.deleteMemberPosition)
router.delete('/:id/groups', accessToken, memberDeleteContrls.deleteMemberMembergroup)
router.delete('/:id/qualifications', accessToken, memberDeleteContrls.deleteMemberqualification)
router.delete('/:id/addresses', accessToken, memberDeleteContrls.deleteMemberAddress)

export default router
