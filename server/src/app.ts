import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import express from 'express'
import { json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { createConnection } from 'typeorm'

// Controllers (route handlers)
import { accessToken } from './helpers/authenticate'
import { findInventoryitems } from './controllers/inventory'
import {
	findExpenseBudgets,
	findExpenses,
	findIncomeBudgets,
	findIncomes,
} from './controllers/finance'
import { findAllMembers } from './controllers/member'
import { mest } from './controllers/mest'

// set instance of express/ create server
const app = express()

// log msg
const customLogMsg =
	'\n===== Begin Log =====\n\n  Method:  :method,\nEndpoint:  :url,\n  Status:  :status,\n  Lenght:  :res[content-length],\n      In:  :response-time ms\n\n====== End Log ======\n'

// define middleware
app.set('port', process.env.PORT || 3000)
app.use(helmet())
app.use(cors())
app.use(logger(customLogMsg))
app.use(json())

// App Routes
app.get('/', mest)
app.get('/inventory', accessToken, findInventoryitems)
app.get('/finance/incomes', findIncomes)
app.get('/finance/incomes/budget', accessToken, findIncomeBudgets)
app.get('/finance/expenses', accessToken, findExpenses)
app.get('/finance/expenses/budget', accessToken, findExpenseBudgets)
app.get('/member', accessToken, findAllMembers)

// start db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
