import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import * as create from '../controllers/controller.createInventorys'
import * as read from '../controllers/controller.readInventorys'
import * as update from '../controllers/controller.updateInventorys'
import * as remove from '../controllers/controller.deleteInventorys'

// route: /inventoryitems
const router: Router = Router()

router.post('/', accessToken, create.newInventoryitem)
router.post('/groups', accessToken, create.newGroup)
router.post('/places', accessToken, create.newPlace)

router.get('/', accessToken, read.allInventoryitems)
router.get('/:id', accessToken, read.oneInventoryitem)
router.get('/:id/members', accessToken, read.itemMember)

router.put('/:id', accessToken, update.inventoryItems)
router.put('/groups/:id', accessToken, update.inventoryItems)
router.put('/places/:id', accessToken, update.inventoryItems)

router.delete('/:id', accessToken, remove.inventoryItems)
router.delete('/groups/:id', accessToken, remove.inventoryItems)
router.delete('/places/:id', accessToken, remove.inventoryItems)

export default router
