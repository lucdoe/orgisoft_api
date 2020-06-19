import { Router } from 'express'
import { verifyToken } from '../../globals/middlewares/middleware.authenticate'
import * as create from '../controllers/controller.createMembers'
import * as read from '../controllers/controller.readMembers'
import * as update from '../controllers/controller.updateMembers'
import * as remove from '../controllers/controller.deleteMembers'

// route: /members
const router: Router = Router()

router.post('/', verifyToken, create.newMember)
router.post('/positions', verifyToken, create.newPosition)
router.post('/groups', verifyToken, create.newMembergroup)
router.post('/qualifications', verifyToken, create.newQualification)
router.post('/:id/qualifications', verifyToken, create.newMemberqualification)
router.post('/statuses', verifyToken, create.newStatus)

router.get('/positions', verifyToken, read.allPositions)
router.get('/positions/:id', verifyToken, read.onePosition)
router.get('/groups', verifyToken, read.allGroups)
router.get('/groups/:id', verifyToken, read.oneGroup)
router.get('/qualifications', verifyToken, read.allQualifications)
router.get('/qualifications/:id', verifyToken, read.oneQualification)
router.get('/statuses', verifyToken, read.allStatuses)
router.get('/statuses/:id', verifyToken, read.oneStatus)
router.get('/', verifyToken, read.allMembers)
router.get('/:id', verifyToken, read.oneMember)
router.get('/:id/positions', verifyToken, read.memberPosition)
router.get('/:id/groups', verifyToken, read.memberGroup)
router.get('/:id/qualifications', verifyToken, read.memberQualification)
router.get('/:id/statuses', verifyToken, read.memberStatus)
router.get('/:id/addresses', verifyToken, read.memberAddress)
router.get('/:id/inventoryitems', verifyToken, read.memberInventoryitems)

router.put('/positions/:id', verifyToken, update.positions)
router.put('/groups/:id', verifyToken, update.groups)
router.put('/qualifications/:id', verifyToken, update.qualifications)
router.put('/status/:id', verifyToken, update.statuses)
router.put('/:id', verifyToken, update.members)
router.put('/:id/positions', verifyToken, update.memberPositions)
router.put('/:id/groups', verifyToken, update.memberGroups)
router.put('/:id/qualifications', verifyToken, update.memberQualifications)
router.put('/:id/statuses', verifyToken, update.memberStatuses)
// n.e.w.
router.put('/:id/addresses', verifyToken, update.memberAddresses)

router.delete('/positions/:id', verifyToken, remove.position)
router.delete('/groups/:id', verifyToken, remove.group)
router.delete('/qualifications/:id', verifyToken, remove.qualification)
router.delete('/statuses/:id', verifyToken, remove.status)
router.delete('/:id', verifyToken, remove.oneMember)
router.delete('/:id/positions', verifyToken, remove.memberPosition)
router.delete('/:id/groups', verifyToken, remove.memberGroup)
router.delete('/:id/qualifications', verifyToken, remove.memberQualification)
router.delete('/:id/statuses', verifyToken, remove.memberStatus)
router.delete('/:id/addresses', verifyToken, remove.memberAddress)

export default router
