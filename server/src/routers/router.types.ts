import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as readContrls from '../controllers/controller.readFinances'
import * as createContrls from '../controllers/controller.createFinances'

const router: Router = Router()

// create
router.post('/incomes', accessToken, createContrls.createIncometype)
router.post('/expenses', accessToken, createContrls.createExpensetype)

// read
router.get('/expenses', accessToken, readContrls.findExpenseTypes)
router.get('/expenses/:id', accessToken, readContrls.findExpenseType)
router.get('/incomes', accessToken, readContrls.findIncomeTypes)
router.get('/incomes/:id', accessToken, readContrls.findIncomeType)

export default router
