import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as readContrls from '../controllers/controller.readFinances'
import * as createContrls from '../controllers/controller.createFinances'
import * as updateContrls from '../controllers/controller.updateFinances'
import * as deleteContrls from '../controllers/controller.deleteFinances'

const router: Router = Router()

// create
router.post('/incomes', accessToken, createContrls.createIncomebudget)
router.post('/expenses', accessToken, createContrls.createExpensebudget)

// read
router.get('/incomes', accessToken, readContrls.findIncomeBudgets)
router.get('/incomes/:id', accessToken, readContrls.findIncomeBudget)
router.get('/expenses', accessToken, readContrls.findExpenseBudgets)
router.get('/expenses/:id', accessToken, readContrls.findExpenseBudget)

// update
router.put('/expenses/:id', accessToken, updateContrls.updateExpensebudget)
router.put('/incomes/:id', accessToken, updateContrls.updateIncomebudget)

// delete
router.delete('/expenses/:id', accessToken, deleteContrls.deleteExpensebudget)
router.delete('/incomes/:id', accessToken, deleteContrls.deleteIncomebudget)

export default router
