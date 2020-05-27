import { Request, Response } from 'express'
import { Incomes } from '../models/Finance/model.Incomes'
import { Incomebudgets } from '../models/Finance/model.Incomebudgets'
import { Expenses } from '../models/Finance/model.Expenses'
import { Expensebudgets } from '../models/Finance/model.Expensebudgets'

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
