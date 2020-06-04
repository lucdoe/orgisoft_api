import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as finContrls from '../controllers/controller.readFinances'

const router: Router = Router()

router.get('/expenses', accessToken, finContrls.findExpenseTypes)
router.get('/expenses/:id', accessToken, finContrls.findExpenseType)
router.get('/incomes', accessToken, finContrls.findIncomeTypes)
router.get('/incomes/:id', accessToken, finContrls.findIncomeType)

export default router
