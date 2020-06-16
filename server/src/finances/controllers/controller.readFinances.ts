import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Incomes } from '../models/model.Income'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expenses } from '../models/model.Expense'
import { Expensebudgets } from '../models/model.Expensebudget'
import { Incometypes } from '../models/model.Incometype'
import { Expensetypes } from '../models/model.Expensetype'

export const allIncomes = async (request: Request, response: Response) => {
	const allIncomes = await Incomes.find({
		relations: ['members', 'incometypes', 'currencys'],
	})
	response.status(200).json(allIncomes)
}

export const oneIncome = async (request: Request, response: Response) => {
	const incomeId = request.params.id
	const income = await Incomes.find({
		relations: ['members', 'incometypes', 'currencys'],
		where: {
			id: incomeId,
		},
	})
	response.status(200).json(income)
}

export const allIncomeBudgets = async (request: Request, response: Response) => {
	const allIncomeBudgets = await getRepository(Incomebudgets).createQueryBuilder().getMany()
	response.status(200).json(allIncomeBudgets)
}

export const oneIncomeBudget = async (request: Request, response: Response) => {
	const budgetId = request.params.id
	const budget = await Incomebudgets.find({
		where: {
			id: budgetId,
		},
	})
	response.status(200).json(budget)
}

export const allIncomeTypes = async (request: Request, response: Response) => {
	const allIncomeTypes = await Incometypes.find()
	response.status(200).json(allIncomeTypes)
}

export const oneIncomeType = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const type = await Incometypes.find({
		where: {
			id: typeId,
		},
	})
	response.status(200).json(type)
}

export const allExpenses = async (request: Request, response: Response) => {
	const allExpenses = await Expenses.find({
		relations: ['members', 'expensetypes', 'currencys'],
	})
	response.status(200).json(allExpenses)
}

export const oneExpense = async (request: Request, response: Response) => {
	const expenseId = request.params.id
	const expense = await Expenses.find({
		relations: ['members', 'expensetypes', 'currencys'],
		where: {
			id: expenseId,
		},
	})
	response.status(200).json(expense)
}

export const allExpenseBudgets = async (request: Request, response: Response) => {
	const allIncomeBudgets = await Expensebudgets.find()
	response.status(200).json(allIncomeBudgets)
}

export const oneExpenseBudget = async (request: Request, response: Response) => {
	const budgetId = request.params.id
	const budget = await Expensebudgets.find({
		where: {
			id: budgetId,
		},
	})
	response.status(200).json(budget)
}

export const allExpenseTypes = async (request: Request, response: Response) => {
	const allExpenseTypes = await Expensetypes.find()
	response.status(200).json(allExpenseTypes)
}

export const oneExpenseType = async (request: Request, response: Response) => {
	const typeId = request.params.id
	const type = await Expensetypes.find({
		where: {
			id: typeId,
		},
	})
	response.status(200).json(type)
}
