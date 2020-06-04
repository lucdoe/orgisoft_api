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
import members from './members/routers/router.members'
import inventorys from './inventoryitems/routers/router.inventoryitems'
import positions from './members/routers/router.positions'
import statuses from './members/routers/router.statuses'
import qualifications from './members/routers/router.qualifications'
import membergroups from './members/routers/router.membergroups'
import memberqualifications from './members/routers/router.memberqualifications'
import finances from './finances/routers/router.finances'
import budgets from './finances/routers/router.budgets'
import types from './finances/routers/router.types'

// set instance of express
const app: Application = express()

// set app port
app.set('port', process.env.PORT || 3000)

// mounting third party middleware
app.use(helmet())
app.use(cors())
app.use(json())
app.use(logger(loggerMsgTemplate))

// mounting routes / controllers to app
app.use('/members', members)
app.use('/inventoryitems', inventorys)
app.use('/positions', positions)
app.use('/statuses', statuses)
app.use('/qualifications', qualifications)
app.use('/membergroups', membergroups)
app.use('/memberqualifications', memberqualifications)
app.use('/finances', finances)
app.use('/budgets', budgets)
app.use('/types', types)

// db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
