import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as finContrls from '../controllers/controller.readFinances'

const router: Router = Router()

router.get('/expenses', accessToken, finContrls.findExpenses)
router.get('/expenses/:id', accessToken, finContrls.findExpense)

router.get('/incomes/:id', accessToken, finContrls.findIncome)
router.get('/incomes', accessToken, finContrls.findIncomes)

export default router
