import { Router } from 'express'

import { accessToken } from '../middlewares/middleware.authenticate'
import * as readContrls from '../controllers/controller.readFinances'
import * as createContrls from '../controllers/controller.createFinances'
import * as updateContrls from '../controllers/controller.updateFinances'
import * as deleteContrls from '../controllers/controller.deleteFinances'

const router: Router = Router()

// create
router.post('/incomes', accessToken, createContrls.createIncometype)
router.post('/expenses', accessToken, createContrls.createExpensetype)

// read
router.get('/expenses', accessToken, readContrls.findExpenseTypes)
router.get('/expenses/:id', accessToken, readContrls.findExpenseType)
router.get('/incomes', accessToken, readContrls.findIncomeTypes)
router.get('/incomes/:id', accessToken, readContrls.findIncomeType)

// update
router.put('/expenses/:id', accessToken, updateContrls.updateExpensetype)
router.put('/incomes/:id', accessToken, updateContrls.updateIncometype)

// delete
router.delete('/expenses/:id', accessToken, deleteContrls.deleteExpensetype)
router.delete('/incomes/:id', accessToken, deleteContrls.deleteIncometype)

export default router
