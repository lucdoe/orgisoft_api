import { Router } from 'express'

import { accessToken } from '../../middlewares/middleware.authenticate'
import { createIncometype, createExpensetype } from '../../controllers/finances/controller.createFinances'
import {
	findIncomeTypes,
	findIncomeType,
	findExpenseTypes,
	findExpenseType,
} from '../../controllers/finances/controller.readFinances'
import { updateIncometype, updateExpensetype } from '../../controllers/finances/controller.updateFinances'
import { deleteIncometype, deleteExpensetype } from '../../controllers/finances/controller.deleteFinances'

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
