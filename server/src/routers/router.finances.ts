import { Router } from 'express'
import { accessToken } from '../middlewares/middleware.authenticate'
import * as readContrls from '../controllers/controller.readFinances'
import * as createContrls from '../controllers/controller.createFinances'
import * as updateContrls from '../controllers/controller.updateFinances'
import * as deleteContrls from '../controllers/controller.deleteFinances'

const router: Router = Router()

// create
router.post('/incomes', accessToken, createContrls.createIncome)
router.post('/expenses', accessToken, createContrls.createExpense)

// read
router.get('/expenses', accessToken, readContrls.findExpenses)
router.get('/expenses/:id', accessToken, readContrls.findExpense)
router.get('/incomes/:id', accessToken, readContrls.findIncome)
router.get('/incomes', accessToken, readContrls.findIncomes)

// update
router.put('/incomes/:id', accessToken, updateContrls.updateIncome)
router.put('/expenses/:id', accessToken, updateContrls.updateExpense)

// delete
router.delete('/expenses/:id', accessToken, deleteContrls.deleteExpense)
router.delete('/incomes/:id', accessToken, deleteContrls.deleteIncome)

export default router
