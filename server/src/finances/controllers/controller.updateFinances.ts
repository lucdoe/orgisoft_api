import { Request, Response, request } from 'express'
import { getManager } from 'typeorm'
import { Incomes } from '../models/model.Income'
import { Expensebudgets } from '../models/model.Expensebudget'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expensetypes } from '../models/model.Expensetype'
import { Incometypes } from '../models/model.Incometype'

export const income = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const id = request.params.id
	const result = {
		members: request.body.member,
		currencys: request.body.currency,
		incometypes: request.body.incometype,
		income: request.body.income,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		updatedAt: currentDate,
	}
	await manager.update(Incomes, id, result)
	response.status(200).json(`Succesfully updated Income: ${result.income}`)
}

export const incomeType = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		incometype: request.body.type,
	}
	await manager.update(Incometypes, id, result)
	response.status(200).json(`Succesfully updated Incometype: ${result.incometype}`)
}

export const incomeBudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const id = request.body.id
	const result = {
		incomebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.update(Incomebudgets, id, result)
	response.status(200).json(`Succesfully updated Incomebudget: ${result.incomebudget}`)
}

export const expense = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const id = request.params.id
	const result = {
		members: request.body.member,
		currencys: request.body.currency,
		expensetypes: request.body.incometype,
		expense: request.body.income,
		amount: request.body.amount,
		dateRecieved: request.body.date,
		updatedAt: currentDate,
	}
	await manager.update(Incomes, id, result)
	response.status(200).json(`Succesfully updated Expense: ${result.expense}`)
}

export const expenseType = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		expensetype: request.body.type,
	}
	await manager.update(Expensetypes, id, result)
	response.status(200).json(`Succesfully updated Expensetype: ${result.expensetype}`)
}

export const expenseBudget = async (request: Request, response: Response) => {
	const manager = getManager()
	const id = request.body.id
	const result = {
		expensebudget: request.body.budget,
		amount: request.body.amount,
	}
	await manager.update(Expensebudgets, id, result)
	response.status(200).json(`Succesfully updated Expensebudget: ${result.expensebudget}`)
}
