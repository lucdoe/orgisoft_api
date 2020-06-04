import { Router } from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import { createIncome, createExpense } from '../controllers/controller.createFinances'
import { findIncomes, findIncome, findExpenses, findExpense } from '../controllers/controller.readFinances'
import { updateIncome, updateExpense } from '../controllers/controller.updateFinances'
import { deleteIncome, deleteExpense } from '../controllers/controller.deleteFinances'

// route: /finances
const router: Router = Router()

// create
router.post('/incomes', accessToken, createIncome)
router.post('/expenses', accessToken, createExpense)

// read
router.get('/incomes/:id', accessToken, findIncome)
router.get('/incomes', accessToken, findIncomes)
router.get('/expenses', accessToken, findExpenses)
router.get('/expenses/:id', accessToken, findExpense)

// update
router.put('/incomes/:id', accessToken, updateIncome)
router.put('/expenses/:id', accessToken, updateExpense)

// delete
router.delete('/incomes/:id', accessToken, deleteIncome)
router.delete('/expenses/:id', accessToken, deleteExpense)

export default router
