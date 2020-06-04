import express, { Router } from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import * as invContrls from '../controllers/controller.inventorys'

// route: /inventoryitems
const router: Router = Router()

// create
router.post('/', accessToken, invContrls.createInventoryitem)
router.post('/groups', accessToken, invContrls.createInventoryGroup)
router.post('/places', accessToken, invContrls.createInventoryPlace)

// read
router.get('/', accessToken, invContrls.readInventoryitems)
router.get('/:id', accessToken, invContrls.readInventoryitem)
router.get('/:id/members', accessToken, invContrls.readItemOwner)

// update
router.put('/:id', accessToken, invContrls.updateInventoryitem)
router.put('/groups/:id', accessToken, invContrls.updateInventoryGroup)
router.put('/places/:id', accessToken, invContrls.updateInventoryPlace)

// delete
router.delete('/:id', accessToken, invContrls.deleteInventoryitem)
router.delete('/groups/:id', accessToken, invContrls.deleteInventorygroup)
router.delete('/places/:id', accessToken, invContrls.deleteInventoryplace)

export default router
