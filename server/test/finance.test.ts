import {
	findExpenseBudgets,
	findExpenses,
	findIncomeBudgets,
	findIncomes,
} from '../src/controllers/finance'

describe('testing finance controller', () => {
	it('test DB connection object', async () => {
		expect(findIncomes.allIncomes).toHaveBeenCalled()
	})
})
