import { Router } from 'express'
import { verifyToken } from '../../globals/middlewares/middleware.authenticate'
import * as create from '../controllers/controller.createFinances'
import * as read from '../controllers/controller.readFinances'
import * as update from '../controllers/controller.updateFinances'
import * as remove from '../controllers/controller.deleteFinances'

// route: /finances
const router: Router = Router()

router.post('/incomes', verifyToken, create.income)
router.post('/expenses', verifyToken, create.expense)
router.post('/types/incomes', verifyToken, create.incomeType)
router.post('/types/expenses', verifyToken, create.expenseType)
router.post('/budgets/incomes', verifyToken, create.incomeBudget)
router.post('/budgets/expenses', verifyToken, create.expenseBudget)

router.get('/budgets/incomes', verifyToken, read.allIncomeBudgets)
router.get('/budgets/incomes/:id', verifyToken, read.oneIncomeBudget)
router.get('/budgets/expenses', verifyToken, read.allExpenseBudgets)
router.get('/budgets/expenses/:id', verifyToken, read.oneExpenseBudget)
router.get('/types/incomes', verifyToken, read.allIncomeTypes)
router.get('/types/incomes/:id', verifyToken, read.oneIncomeType)
router.get('/types/expenses', verifyToken, read.allExpenseTypes)
router.get('/types/expenses/:id', verifyToken, read.oneExpenseType)
router.get('/incomes', verifyToken, read.allIncomes)
router.get('/incomes/:id', verifyToken, read.oneIncome)
router.get('/expenses', verifyToken, read.allExpenses)
router.get('/expenses/:id', verifyToken, read.oneExpense)

router.put('/budgets/incomes/:id', verifyToken, update.incomeBudget)
router.put('/budgets/expenses/:id', verifyToken, update.expenseBudget)
router.put('/types/incomes/:id', verifyToken, update.incomeType)
router.put('/types/expenses/:id', verifyToken, update.expenseType)
router.put('/incomes/:id', verifyToken, update.income)
router.put('/expenses/:id', verifyToken, update.expense)

router.delete('/budgets/incomes/:id', verifyToken, remove.inventoryitems)
router.delete('/budgets/expenses/:id', verifyToken, remove.inventoryitems)
router.delete('/types/incomes/:id', verifyToken, remove.inventoryitems)
router.delete('/types/expenses/:id', verifyToken, remove.inventoryitems)
router.delete('/incomes/:id', verifyToken, remove.inventoryitems)
router.delete('/expenses/:id', verifyToken, remove.inventoryitems)

export default router
