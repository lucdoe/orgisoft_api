import { Request, Response, request } from 'express'
import { getManager } from 'typeorm'
import { Incomes } from '../models/finance/model.Income'
import { Expensebudgets } from '../models/finance/model.Expensebudget'
import { Incomebudgets } from '../models/finance/model.Incomebudget'
import { Expensetypes } from '../models/finance/model.Expensetype'
import { Incometypes } from '../models/finance/model.Incometype'

export const updateIncome = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const incomeId = request.params.id
	const newIncome = {
		members: request.body.member,
		currencys: request.body.currency,
		incometypes: request.body.incometype,
		income: request.body.income,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		updatedAt: currentDate,
	}
	await manager.update(Incomes, incomeId, newIncome)
	response.status(200).json(`Succesfully updated Income: ${newIncome.income}`)
}

export const updateIncometype = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const manager = getManager()
	const newIncometype = {
		incometype: request.body.type,
	}
	await manager.update(Incometypes, typeId, newIncometype)
	response.status(200).json(`Succesfully updated Incometype: ${newIncometype.incometype}`)
}

export const updateIncomebudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const budgetId = request.body.id
	const newIncomebudget = {
		incomebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.update(Incomebudgets, budgetId, newIncomebudget)
	response.status(200).json(`Succesfully updated Incomebudget: ${newIncomebudget.incomebudget}`)
}

export const updateExpense = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const expenseId = request.params.id
	const newExpense = {
		members: request.body.member,
		currencys: request.body.currency,
		expensetypes: request.body.incometype,
		expense: request.body.income,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		updatedAt: currentDate,
	}
	await manager.update(Incomes, expenseId, newExpense)
	response.status(200).json(`Succesfully updated Expense: ${newExpense.expense}`)
}

export const updateExpensetype = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const manager = getManager()
	const newExpensetype = {
		expensetype: request.body.type,
	}
	await manager.update(Expensetypes, typeId, newExpensetype)
	response.status(200).json(`Succesfully updated Expensetype: ${newExpensetype.expensetype}`)
}

export const updateExpensebudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const budgetId = request.body.id
	const newExpensebudget = {
		expensebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.update(Expensebudgets, budgetId, newExpensebudget)
	response.status(200).json(`Succesfully updated Expensebudget: ${newExpensebudget.expensebudget}`)
}
