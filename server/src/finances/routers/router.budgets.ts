import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import { createIncomebudget, createExpensebudget } from '../controllers/controller.createFinances'
import {
	findIncomeBudgets,
	findIncomeBudget,
	findExpenseBudgets,
	findExpenseBudget,
} from '../controllers/controller.readFinances'
import { updateIncomebudget, updateExpensebudget } from '../controllers/controller.updateFinances'
import { deleteIncomebudget, deleteExpensebudget } from '../controllers/controller.deleteFinances'

// route: /budgets
const router: Router = Router()

// create
router.post('/incomes', accessToken, createIncomebudget)
router.post('/expenses', accessToken, createExpensebudget)

// read
router.get('/incomes', accessToken, findIncomeBudgets)
router.get('/incomes/:id', accessToken, findIncomeBudget)
router.get('/expenses', accessToken, findExpenseBudgets)
router.get('/expenses/:id', accessToken, findExpenseBudget)

// update
router.put('/incomes/:id', accessToken, updateIncomebudget)
router.put('/expenses/:id', accessToken, updateExpensebudget)

// delete
router.delete('/incomes/:id', accessToken, deleteIncomebudget)
router.delete('/expenses/:id', accessToken, deleteExpensebudget)

export default router
