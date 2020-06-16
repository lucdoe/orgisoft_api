import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import * as create from '../controllers/controller.createMembers'
import * as read from '../controllers/controller.readMembers'
import * as update from '../controllers/controller.updateMembers'
import * as remove from '../controllers/controller.deleteMembers'

// route: /members
const router: Router = Router()

router.post('/', accessToken, create.newMember)
router.post('/positions', accessToken, create.newPosition)
router.post('/groups', accessToken, create.newMembergroup)
router.post('/qualifications', accessToken, create.newQualification)
router.post('/:id/qualifications', accessToken, create.newMemberqualification)
router.post('/statuses', accessToken, create.newStatus)

router.get('/positions', accessToken, read.allPositions)
router.get('/positions/:id', accessToken, read.onePosition)
router.get('/groups', accessToken, read.allGroups)
router.get('/groups/:id', accessToken, read.oneGroup)
router.get('/qualifications', accessToken, read.allQualifications)
router.get('/qualifications/:id', accessToken, read.oneQualification)
router.get('/statuses', accessToken, read.allStatuses)
router.get('/statuses/:id', accessToken, read.oneStatus)
router.get('/', accessToken, read.allMembers)
router.get('/:id', accessToken, read.oneMember)
router.get('/:id/positions', accessToken, read.memberPosition)
router.get('/:id/groups', accessToken, read.memberGroup)
router.get('/:id/qualifications', accessToken, read.memberQualification)
router.get('/:id/statuses', accessToken, read.memberStatus)
router.get('/:id/addresses', accessToken, read.memberAddress)
router.get('/:id/inventoryitems', accessToken, read.memberInventoryitems)

router.put('/positions/:id', accessToken, update.positions)
router.put('/groups/:id', accessToken, update.groups)
router.put('/qualifications/:id', accessToken, update.qualifications)
router.put('/status/:id', accessToken, update.statuses)
router.put('/:id', accessToken, update.members)
router.put('/:id/positions', accessToken, update.memberPositions)
router.put('/:id/groups', accessToken, update.memberGroups)
router.put('/:id/qualifications', accessToken, update.memberQualifications)
router.put('/:id/statuses', accessToken, update.memberStatuses)
// n.e.w.
router.put('/:id/addresses', accessToken, update.memberAddresses)

router.delete('/positions/:id', accessToken, remove.position)
router.delete('/groups/:id', accessToken, remove.group)
router.delete('/qualifications/:id', accessToken, remove.qualification)
router.delete('/statuses/:id', accessToken, remove.status)
router.delete('/:id', accessToken, remove.oneMember)
router.delete('/:id/positions', accessToken, remove.memberPosition)
router.delete('/:id/groups', accessToken, remove.memberGroup)
router.delete('/:id/qualifications', accessToken, remove.memberQualification)
router.delete('/:id/statuses', accessToken, remove.memberStatus)
router.delete('/:id/addresses', accessToken, remove.memberAddress)

export default router
