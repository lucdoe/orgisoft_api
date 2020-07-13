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
	const result = {
		members: request.body.member,
		currencys: request.body.currency,
		incometypes: request.body.incometype,
		income: request.body.income,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Incomes, result)
	response.status(201).json(`Succesfully inserted Income: ${result.income}`)
}

export const incomeBudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		incomebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.insert(Incomebudgets, result)
	response.status(201).json(`Succesfully inserted Incomebudget: ${result.incomebudget}`)
}

export const incomeType = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		incometype: request.body.type,
	}
	await manager.insert(Incometypes, result)
	response.status(201).json(`Succesfully inserted Incometype: ${result.incometype}`)
}

export const expense = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const result = {
		members: request.body.member,
		currencys: request.body.currency,
		expensetypes: request.body.expensetype,
		expense: request.body.expense,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Expenses, result)
	response.status(201).json(`Succesfully inserted Expense: ${result.expense}`)
}

export const expenseBudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		expensebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.insert(Expensebudgets, result)
	response.status(201).json(`Succesfully inserted Expensebudget: ${result.expensebudget}`)
}

export const expenseType = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		expensetype: request.body.budget,
	}
	await manager.insert(Expensetypes, result)
	response.status(201).json(`Succesfully inserted Expensetype: ${result.expensetype}`)
}
