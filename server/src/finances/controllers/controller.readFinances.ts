import { Request, Response } from 'express'
import { Incomes } from '../models/model.Income'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expenses } from '../models/model.Expense'
import { Expensebudgets } from '../models/model.Expensebudget'
import { Incometypes } from '../models/model.Incometype'
import { Expensetypes } from '../models/model.Expensetype'
import { setCache } from '../../globals/middlewares/middleware.cache'

export const instruction = async (request: Request, response: Response) => {
	const result = {
		location: '/finances' + request.path,
		links: {
			self: {
				href: '/',
			},
			expenses: {
				href: '/finances/expenses',
			},
			incomes: {
				href: '/finances/incomes',
			},
		},
		welcome: 'Welcome to the orgisoft server.',
	}
	response.status(200).json(result)
}

export const allIncomes = async (request: Request, response: Response) => {
	const result = await Incomes.find({
		relations: ['members', 'incometypes', 'currencys'],
	})
	const data = {
		path: request.path.split('/')[1],
		id: 'all',
		cache: result,
	}
	setCache(data)
	response.status(200).json(result)
}

export const oneIncome = async (request: Request, response: Response) => {
	const id = request.params.id

	const result = await Incomes.find({
		relations: ['members', 'incometypes', 'currencys'],
		where: {
			id,
		},
	})
	const data = {
		path: request.path.split('/')[1],
		id,
		cache: result,
	}

	setCache(data)

	response.status(200).json(result)
}

export const allIncomeBudgets = async (request: Request, response: Response) => {
	const result = await Incomebudgets.find()
	const data = {
		path: request.path.split('/')[1],
		id: 'all',
		cache: result,
	}
	setCache(data)
	response.status(200).json(result)
}

export const oneIncomeBudget = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Incomebudgets.find({
		where: {
			id,
		},
	})
	response.status(200).json(result)
}

export const allIncomeTypes = async (request: Request, response: Response) => {
	const result = await Incometypes.find()
	response.status(200).json(result)
}

export const oneIncomeType = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Incometypes.find({
		where: {
			id,
		},
	})
	response.status(200).json(result)
}

export const allExpenses = async (request: Request, response: Response) => {
	const result = await Expenses.find({
		relations: ['members', 'expensetypes', 'currencys'],
	})
	response.status(200).json(result)
}

export const oneExpense = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Expenses.find({
		relations: ['members', 'expensetypes', 'currencys'],
		where: {
			id,
		},
	})
	response.status(200).json(result)
}

export const allExpenseBudgets = async (request: Request, response: Response) => {
	const result = await Expensebudgets.find()
	response.status(200).json(result)
}

export const oneExpenseBudget = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Expensebudgets.find({
		where: {
			id,
		},
	})
	response.status(200).json(result)
}

export const allExpenseTypes = async (request: Request, response: Response) => {
	const result = await Expensetypes.find()
	response.status(200).json(result)
}

export const oneExpenseType = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Expensetypes.find({
		where: {
			id,
		},
	})
	response.status(200).json(result)
}
