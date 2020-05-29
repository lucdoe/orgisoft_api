import { Request, Response } from 'express'
import { Incomes } from '../models/finance/model.Income'
import { Incomebudgets } from '../models/finance/model.Incomebudget'
import { Expenses } from '../models/finance/model.Expense'
import { Expensebudgets } from '../models/finance/model.Expensebudget'

export const findIncomes = async (req: Request, res: Response) => {
	const allIncomes = await Incomes.find({
		relations: ['member', 'incometype', 'currency'],
	})
	res.status(200).json(allIncomes)
}

export const findIncomeBudgets = async (req: Request, res: Response) => {
	const allIncomeBudgets = await Incomebudgets.find()
	res.status(200).json(allIncomeBudgets)
}

export const findExpenses = async (req: Request, res: Response) => {
	const allExpenses = await Expenses.find({
		relations: ['member', 'expensetype', 'currency'],
	})
	res.status(200).json(allExpenses)
}

export const findExpenseBudgets = async (req: Request, res: Response) => {
	const allIncomeBudgets = await Expensebudgets.find()
	res.status(200).json(allIncomeBudgets)
}
