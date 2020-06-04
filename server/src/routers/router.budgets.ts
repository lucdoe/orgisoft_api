import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as finContrls from '../controllers/controller.readFinances'

const router: Router = Router()

router.get('/incomes', accessToken, finContrls.findIncomeBudgets)
router.get('/incomes/:id', accessToken, finContrls.findIncomeBudget)
router.get('/expenses', accessToken, finContrls.findExpenseBudgets)
router.get('/expenses/:id', accessToken, finContrls.findExpenseBudget)

export default router
