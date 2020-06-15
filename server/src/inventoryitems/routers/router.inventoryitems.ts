import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import * as createContrls from '../controllers/controller.createInventorys'
import * as readContrls from '../controllers/controller.readInventorys'
import { updateInventory } from '../controllers/controller.updateInventorys'
import { deleteInventory } from '../controllers/controller.deleteInventorys'

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
router.put('/:id', accessToken, updateInventory)
router.put('/groups/:id', accessToken, updateInventory)
router.put('/places/:id', accessToken, updateInventory)

// delete
router.delete('/:id', accessToken, deleteInventory)
router.delete('/groups/:id', accessToken, deleteInventory)
router.delete('/places/:id', accessToken, deleteInventory)

export default router
