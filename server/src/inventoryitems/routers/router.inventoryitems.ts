import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import * as createContrls from '../controllers/controller.createInventorys'
import * as readContrls from '../controllers/controller.readInventorys'
import * as updateContrls from '../controllers/controller.updateInventorys'
import * as deleteContrls from '../controllers/controller.deleteInventorys'

// route: /inventoryitems
const router: Router = Router()

// create
router.post('/', accessToken, createContrls.createInventoryitem)
router.post('/groups', accessToken, createContrls.createInventoryGroup)
router.post('/places', accessToken, createContrls.createInventoryPlace)

// read
router.get('/', accessToken, readContrls.readInventoryitems)
router.get('/:id', accessToken, readContrls.readInventoryitem)
router.get('/:id/members', accessToken, readContrls.readItemOwner)

// update
router.put('/:id', accessToken, updateContrls.updateInventoryitem)
router.put('/groups/:id', accessToken, updateContrls.updateInventoryGroup)
router.put('/places/:id', accessToken, updateContrls.updateInventoryPlace)

// delete
router.delete('/:id', accessToken, deleteContrls.deleteInventoryitem)
router.delete('/groups/:id', accessToken, deleteContrls.deleteInventorygroup)
router.delete('/places/:id', accessToken, deleteContrls.deleteInventoryplace)

export default router
