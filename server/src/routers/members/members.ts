import express from 'express'
import { accessToken } from '../../helpers/authenticate'
import * as memberReadContrls from '../../controllers/member/read'

const router = express.Router()

router.get('/', accessToken, memberReadContrls.readMembers)
router.get('/:id', accessToken, memberReadContrls.readMember)

router.get('/:id/addresses', accessToken, memberReadContrls.readMemberAddress)
router.get('/:id/positions', accessToken, memberReadContrls.readMemberPosition)
router.get('/:id/statuses', accessToken, memberReadContrls.readMemberStatus)
router.get('/:id/groups', accessToken, memberReadContrls.readMemberGroup)
// TODO
router.get('/:id/qualifications', accessToken, memberReadContrls.readMemberQualification)
router.get('/:id/inventoryitems', accessToken, memberReadContrls.readMemberinventoryitem)

export default router
