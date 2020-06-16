import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Incomes } from '../models/model.Income'
import { Expenses } from '../models/model.Expense'
import { Expensebudgets } from '../models/model.Expensebudget'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Incometypes } from '../models/model.Incometype'
import { Expensetypes } from '../models/model.Expensetype'

export const income = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newIncome = {
		members: request.body.member,
		currencys: request.body.currency,
		incometypes: request.body.incometype,
		income: request.body.income,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Incomes, newIncome)
	response.status(201).json(`Succesfully inserted Income: ${newIncome.income}`)
}

export const incomeBudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const newIncomebudget = {
		incomebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.insert(Incomebudgets, newIncomebudget)
	response.status(201).json(`Succesfully inserted Incomebudget: ${newIncomebudget.incomebudget}`)
}

export const incomeType = async (request: Request, response: Response) => {
	const manager = getManager()
	const newIncometype = {
		incometype: request.body.type,
	}
	await manager.insert(Incometypes, newIncometype)
	response.status(201).json(`Succesfully inserted Incometype: ${newIncometype.incometype}`)
}

export const expense = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newExpense = {
		members: request.body.member,
		currencys: request.body.currency,
		expensetypes: request.body.expensetype,
		expense: request.body.expense,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Expenses, newExpense)
	response.status(201).json(`Succesfully inserted Expense: ${newExpense.expense}`)
}

export const expenseBudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const newExpensebudget = {
		expensebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.insert(Expensebudgets, newExpensebudget)
	response.status(201).json(`Succesfully inserted Expensebudget: ${newExpensebudget.expensebudget}`)
}

export const expenseType = async (request: Request, response: Response) => {
	const manager = getManager()
	const newExpensetype = {
		expensetype: request.body.budget,
	}
	await manager.insert(Expensetypes, newExpensetype)
	response.status(201).json(`Succesfully inserted Expensetype: ${newExpensetype.expensetype}`)
}
