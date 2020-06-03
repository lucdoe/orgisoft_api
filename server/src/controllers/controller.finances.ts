import { Request, Response } from 'express'
import { Incomes } from '../models/finance/model.Income'
import { Incomebudgets } from '../models/finance/model.Incomebudget'
import { Expenses } from '../models/finance/model.Expense'
import { Expensebudgets } from '../models/finance/model.Expensebudget'

export const findIncomes = async (request: Request, response: Response) => {
	const allIncomes = await Incomes.find({
		relations: ['member', 'incometype', 'currency'],
	})
	response.status(200).json(allIncomes)
}

export const findIncomeBudgets = async (request: Request, response: Response) => {
	const allIncomeBudgets = await Incomebudgets.find()
	response.status(200).json(allIncomeBudgets)
}

export const findExpenses = async (request: Request, response: Response) => {
	const allExpenses = await Expenses.find({
		relations: ['member', 'expensetype', 'currency'],
	})
	response.status(200).json(allExpenses)
}

export const findExpenseBudgets = async (request: Request, response: Response) => {
	const allIncomeBudgets = await Expensebudgets.find()
	response.status(200).json(allIncomeBudgets)
}
