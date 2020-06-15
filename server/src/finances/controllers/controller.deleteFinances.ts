import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Incomes } from '../models/model.Income'
import { Expenses } from '../models/model.Expense'
import { Incometypes } from '../models/model.Incometype'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expensetypes } from '../models/model.Expensetype'
import { Expensebudgets } from '../models/model.Expensebudget'

export const deleteItem = (request: Request, response: Response) => {
	const db = getManager()

	const row = request.params.id
	const path = request.path.split('/')[1]

	const { baseUrl } = request

	switch (path) {
		case 'incomes':
			if (baseUrl == 'finances') db.delete(Incomes, row)
			if (baseUrl == 'budgets') db.delete(Incomebudgets, row)
			if (baseUrl == 'types') db.delete(Incometypes, row)

		case 'expenses':
			if (baseUrl == 'finances') db.delete(Expenses, row)
			if (baseUrl == 'budgets') db.delete(Expensebudgets, row)
			if (baseUrl == 'types') db.delete(Expensetypes, row)
	}

	return response
		.status(200)
		.json({ message: `Succesfully deleted ${baseUrl + '/' + path} with id: ${row}.` })
}
