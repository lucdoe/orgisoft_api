import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as finContrls from '../controllers/controller.readFinances'

const router: Router = Router()

router.get('/incomes', accessToken, finContrls.findIncomeBudgets)
router.get('/expenses', accessToken, finContrls.findExpenseBudgets)

export default router
