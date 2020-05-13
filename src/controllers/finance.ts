import { Request, Response } from 'express'
import { Income } from '../models/Finance/Incomes/Income'
import { Incomebudget } from '../models/Finance/Incomes/Incomebudget'
import { Expense } from '../models/Finance/Expenses/Expense'
import { Expensebudget } from '../models/Finance/Expenses/Expensebudget'

export const findIncomes = async (req: Request, res: Response) => {
	const allIncomes = await Income.find({
		relations: ['member', 'incometype', 'currency'],
	})
	res.status(200).json(allIncomes)
}

export const findIncomeBudgets = async (req: Request, res: Response) => {
	const allIncomeBudgets = await Incomebudget.find()
	res.status(200).json(allIncomeBudgets)
}

export const findExpenses = async (req: Request, res: Response) => {
	const allExpenses = await Expense.find({
		relations: ['member', 'expensetype', 'currency'],
	})
	res.status(200).json(allExpenses)
}

export const findExpenseBudgets = async (req: Request, res: Response) => {
	const allIncomeBudgets = await Expensebudget.find()
	res.status(200).json(allIncomeBudgets)
}
