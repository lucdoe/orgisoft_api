import * as dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import * as express from 'express'
import { json } from 'express'
import * as helmet from 'helmet'
import * as logger from 'morgan'
import { createConnection } from 'typeorm'

// Controllers (route handlers)
import * as inventoryController from './controllers/inventory'
import * as financeController from './controllers/finance'
import * as memberController from './controllers/member'

// set instance of express/ create server
const app = express()

// log msg
const customLogMsg =
	'\n===== Begin Log =====\n\n  Method:  :method,\nEndpoint:  :url,\n  Status:  :status,\n  Lenght:  :res[content-length],\n      In:  :response-time ms\n\n====== End Log ======\n'

// define middleware
app.set('port', process.env.PORT || 3000)
app.use(helmet())
app.use(logger(customLogMsg))
app.use(json())

// App Routes
app.get('/inventory', inventoryController.findInventoryitems)
app.get('/inventory', inventoryController.findInventoryitems)
app.get('/finance/incomes', financeController.findIncomes)
app.get('/finance/incomes/budget', financeController.findIncomeBudgets)
app.get('/finance/expenses', financeController.findExpenses)
app.get('/finance/expenses/budget', financeController.findExpenseBudgets)
app.get('/member', memberController.findAllMembers)

// start db connection
createConnection()
	.then(async (connection) => {
		console.log('	Database connected')
		return connection
	})
	.catch((error) => console.log(error))

export default app
