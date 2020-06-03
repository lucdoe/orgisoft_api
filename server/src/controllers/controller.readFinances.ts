import { Request, Response } from 'express'
import { Incomes } from '../models/finance/model.Income'
import { Incomebudgets } from '../models/finance/model.Incomebudget'
import { Expenses } from '../models/finance/model.Expense'
import { Expensebudgets } from '../models/finance/model.Expensebudget'
import { Incometypes } from '../models/finance/model.Incometype'
import { Expensetypes } from '../models/finance/model.Expensetype'

export const findIncomes = async (request: Request, response: Response) => {
	const allIncomes = await Incomes.find({
		relations: ['member', 'incometype', 'currency'],
	})
	response.status(200).json(allIncomes)
}

export const findIncome = async (request: Request, response: Response) => {
	const incomeId = request.params.id
	const income = await Incomes.find({
		relations: ['member', 'incometype', 'currency'],
		where: {
			id: incomeId,
		},
	})
	response.status(200).json(income)
}

export const findIncomeBudgets = async (request: Request, response: Response) => {
	const allIncomeBudgets = await Incomebudgets.find()
	response.status(200).json(allIncomeBudgets)
}

export const findIncomeBudget = async (request: Request, response: Response) => {
	const budgetId = request.params.id
	const budget = await Incomebudgets.find({
		where: {
			id: budgetId,
		},
	})
	response.status(200).json(budget)
}

export const findIncomeTypes = async (request: Request, response: Response) => {
	const allIncomeTypes = await Incometypes.find()
	response.status(200).json(allIncomeTypes)
}

export const findIncomeType = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const type = await Incometypes.find({
		where: {
			id: typeId,
		},
	})
	response.status(200).json(type)
}

export const findExpenses = async (request: Request, response: Response) => {
	const allExpenses = await Expenses.find({
		relations: ['member', 'expensetype', 'currency'],
	})
	response.status(200).json(allExpenses)
}

export const findExpense = async (request: Request, response: Response) => {
	const expenseId = request.params.id
	const expense = await Expenses.find({
		relations: ['member', 'expensetype', 'currency'],
		where: {
			id: expenseId,
		},
	})
	response.status(200).json(expense)
}

export const findExpenseBudgets = async (request: Request, response: Response) => {
	const allIncomeBudgets = await Expensebudgets.find()
	response.status(200).json(allIncomeBudgets)
}

export const findExpenseBudget = async (request: Request, response: Response) => {
	const budgetId = request.params.id
	const budget = await Expensebudgets.find({
		where: {
			id: budgetId,
		},
	})
	response.status(200).json(budget)
}

export const findExpenseTypes = async (request: Request, response: Response) => {
	const allExpenseTypes = await Expensetypes.find()
	response.status(200).json(allExpenseTypes)
}

export const findExpenseType = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const type = await Expensetypes.find({
		where: {
			id: typeId,
		},
	})
	response.status(200).json(type)
}
