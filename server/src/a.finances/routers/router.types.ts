import { Router } from 'express'
import { accessToken } from '../../b.globals/middlewares/middleware.authenticate'
import { createIncometype, createExpensetype } from '../controllers/controller.createFinances'
import {
	findIncomeTypes,
	findIncomeType,
	findExpenseTypes,
	findExpenseType,
} from '../controllers/controller.readFinances'
import { updateIncometype, updateExpensetype } from '../controllers/controller.updateFinances'
import { deleteIncometype, deleteExpensetype } from '../controllers/controller.deleteFinances'

// route: /types
const router: Router = Router()

// create
router.post('/incomes', accessToken, createIncometype)
router.post('/expenses', accessToken, createExpensetype)

// read
router.get('/incomes', accessToken, findIncomeTypes)
router.get('/incomes/:id', accessToken, findIncomeType)
router.get('/expenses', accessToken, findExpenseTypes)
router.get('/expenses/:id', accessToken, findExpenseType)

// update
router.put('/incomes/:id', accessToken, updateIncometype)
router.put('/expenses/:id', accessToken, updateExpensetype)

// delete
router.delete('/incomes/:id', accessToken, deleteIncometype)
router.delete('/expenses/:id', accessToken, deleteExpensetype)

export default router
