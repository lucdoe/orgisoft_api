import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Incomes } from '../models/model.Income'
import { Expenses } from '../models/model.Expense'
import { Incometypes } from '../models/model.Incometype'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expensetypes } from '../models/model.Expensetype'
import { Expensebudgets } from '../models/model.Expensebudget'

export const deleteIncome = async (request: Request, response: Response) => {
	const manager = getManager()
	const incomeId = request.params.id
	await manager.delete(Incomes, incomeId)
	response.status(200).json(`Succesfully deleted Income.`)
}

export const deleteIncomebudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const budgetId = request.body.id
	await manager.delete(Incomebudgets, budgetId)
	response.status(200).json(`Succesfully deleted Incomebudget.`)
}

export const deleteIncometype = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const manager = getManager()
	await manager.delete(Incometypes, typeId)
	response.status(200).json(`Succesfully deleted Incometype.`)
}

export const deleteExpense = async (request: Request, response: Response) => {
	const manager = getManager()
	const expenseId = request.params.id
	await manager.delete(Expenses, expenseId)
	response.status(200).json(`Succesfully deleted Expense.`)
}

export const deleteExpensetype = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const manager = getManager()
	await manager.delete(Expensetypes, typeId)
	response.status(200).json(`Succesfully deleted Expensetype.`)
}

export const deleteExpensebudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const budgetId = request.body.id
	await manager.delete(Expensebudgets, budgetId)
	response.status(200).json(`Succesfully deleted Expensebudget.`)
}
