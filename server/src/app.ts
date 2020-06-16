// importing third party middleware
import express, { json, Application } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { loggerMsgTemplate } from './globals/helpers/helper.logger'

// importing routes / controllers
import membersRouter from './members/routers/router.members'
import financesRouter from './finances/routers/router.finances'
import budgetsRouter from './finances/routers/router.budgets'
import typesRouter from './finances/routers/router.types'
import inventoryitemsRouter from './inventoryitems/routers/router.inventoryitems'

// set instance of express
const app: Application = express()

// set app port
app.set('port', process.env.PORT || 3000)

// mounting third party middleware to app
app.use(helmet())
app.use(cors())
app.use(json())
app.use(logger(loggerMsgTemplate))

// mounting routers / set routes
app.use('/members', membersRouter)
app.use('/finances', financesRouter)
app.use('/budgets', budgetsRouter)
app.use('/types', typesRouter)
app.use('/inventoryitems', inventoryitemsRouter)

// db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
