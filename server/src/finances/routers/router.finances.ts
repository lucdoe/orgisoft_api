import { Router } from 'express'
import { accessToken } from '../../globals/middlewares/middleware.authenticate'
import * as create from '../controllers/controller.createFinances'
import * as read from '../controllers/controller.readFinances'
import * as update from '../controllers/controller.updateFinances'
import * as remove from '../controllers/controller.deleteFinances'

// route: /finances
const router: Router = Router()

router.post('/incomes', accessToken, create.income)
router.post('/expenses', accessToken, create.expense)
router.post('/types/incomes', accessToken, create.incomeType)
router.post('/types/expenses', accessToken, create.expenseType)
router.post('/budgets/incomes', accessToken, create.incomeBudget)
router.post('/budgets/expenses', accessToken, create.expenseBudget)

router.get('/budgets/incomes', accessToken, read.allIncomeBudgets)
router.get('/budgets/incomes/:id', accessToken, read.oneIncomeBudget)
router.get('/budgets/expenses', accessToken, read.allExpenseBudgets)
router.get('/budgets/expenses/:id', accessToken, read.oneExpenseBudget)
router.get('/types/incomes', accessToken, read.allIncomeTypes)
router.get('/types/incomes/:id', accessToken, read.oneIncomeType)
router.get('/types/expenses', accessToken, read.allExpenseTypes)
router.get('/types/expenses/:id', accessToken, read.oneExpenseType)
router.get('/incomes', accessToken, read.allIncomes)
router.get('/incomes/:id', accessToken, read.oneIncome)
router.get('/expenses', accessToken, read.allExpenses)
router.get('/expenses/:id', accessToken, read.oneExpense)

router.put('/budgets/incomes/:id', accessToken, update.incomeBudget)
router.put('/budgets/expenses/:id', accessToken, update.expenseBudget)
router.put('/types/incomes/:id', accessToken, update.incomeType)
router.put('/types/expenses/:id', accessToken, update.expenseType)
router.put('/incomes/:id', accessToken, update.income)
router.put('/expenses/:id', accessToken, update.expense)

router.delete('/budgets/incomes/:id', accessToken, remove.inventoryitems)
router.delete('/budgets/expenses/:id', accessToken, remove.inventoryitems)
router.delete('/types/incomes/:id', accessToken, remove.inventoryitems)
router.delete('/types/expenses/:id', accessToken, remove.inventoryitems)
router.delete('/incomes/:id', accessToken, remove.inventoryitems)
router.delete('/expenses/:id', accessToken, remove.inventoryitems)

export default router
