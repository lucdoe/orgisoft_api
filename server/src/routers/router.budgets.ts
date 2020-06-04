import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as readContrls from '../controllers/controller.readFinances'
import * as createContrls from '../controllers/controller.createFinances'

const router: Router = Router()

// create
router.post('/incomes', accessToken, createContrls.createIncomebudget)
router.post('/expenses', accessToken, createContrls.createExpensebudget)

// read
router.get('/incomes', accessToken, readContrls.findIncomeBudgets)
router.get('/incomes/:id', accessToken, readContrls.findIncomeBudget)
router.get('/expenses', accessToken, readContrls.findExpenseBudgets)
router.get('/expenses/:id', accessToken, readContrls.findExpenseBudget)

export default router
