import { Request, Response } from 'express'
import { getManager, getRepository } from 'typeorm'
import { Incomes } from '../models/model.Income'
import { Expenses } from '../models/model.Expense'
import { Incometypes } from '../models/model.Incometype'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expensetypes } from '../models/model.Expensetype'
import { Expensebudgets } from '../models/model.Expensebudget'

export const deleteItem = (request: Request, response: Response) => {
	const db = getManager()
	const id = request.params.id
	const { baseUrl, path } = request
	const category = path.split('/')[1]
	const entity = baseUrl

	switch (category) {
		case 'incomes':
			if (entity == 'finances') db.delete(Incomes, id)
			if (entity == 'budgets') db.delete(Incomebudgets, id)
			if (entity == 'types') db.delete(Incometypes, id)

		case 'expenses':
			if (entity == 'finances') db.delete(Expenses, id)
			if (entity == 'budgets') db.delete(Expensebudgets, id)
			if (entity == 'types') db.delete(Expensetypes, id)
	}

	return response
		.status(200)
		.json({ message: `Succesfully deleted ${entity + '/' + category} with id: ${id}.` })
}
