import { Request, Response } from 'express'
import { Incomes } from '../models/model.Income'
import { Expenses } from '../models/model.Expense'
import { Incometypes } from '../models/model.Incometype'
import { Incomebudgets } from '../models/model.Incomebudget'
import { Expensetypes } from '../models/model.Expensetype'
import { Expensebudgets } from '../models/model.Expensebudget'

export const deleteItem = async (request: Request, response: Response) => {
	const row = request.params.id

	const path = request.path.split('/')[1]
	const baseUrl = request.baseUrl.split('/')[1]

	switch (path) {
		case 'incomes':
			if (baseUrl == 'finances') await Incomes.delete(row)
			if (baseUrl == 'budgets') await Incomebudgets.delete(row)
			if (baseUrl == 'types') await Incometypes.delete(row)
			break

		case 'expenses':
			if (baseUrl == 'finances') await Expenses.delete(row)
			if (baseUrl == 'budgets') await Expensebudgets.delete(row)
			if (baseUrl == 'types') await Expensetypes.delete(row)
			break
	}

	return response
		.status(200)
		.json({ message: `Succesfully deleted ${baseUrl + '/' + path} with id: ${row}.` })
}
