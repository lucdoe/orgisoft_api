import { Router } from 'express'
import { verifyToken } from '../../globals/middlewares/middleware.authenticate'
import * as create from '../controllers/controller.createInventorys'
import * as read from '../controllers/controller.readInventorys'
import * as update from '../controllers/controller.updateInventorys'
import * as remove from '../controllers/controller.deleteInventorys'

// route: /inventoryitems
const router: Router = Router()

router.post('/', verifyToken, create.newInventoryitem)
router.post('/groups', verifyToken, create.newGroup)
router.post('/places', verifyToken, create.newPlace)

router.get('/', verifyToken, read.allInventoryitems)
router.get('/:id', verifyToken, read.oneInventoryitem)
router.get('/:id/members', verifyToken, read.itemMember)

router.put('/:id', verifyToken, update.inventoryItems)
router.put('/groups/:id', verifyToken, update.inventoryItems)
router.put('/places/:id', verifyToken, update.inventoryItems)

router.delete('/:id', verifyToken, remove.inventoryItems)
router.delete('/groups/:id', verifyToken, remove.inventoryItems)
router.delete('/places/:id', verifyToken, remove.inventoryItems)

export default router
