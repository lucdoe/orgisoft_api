import express, { json, Application } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { loggerMsg } from './globals/helpers/helper.logger'

import membersRouter from './members/routers/router.members'
import financesRouter from './finances/routers/router.finances'
import inventoryitemsRouter from './inventoryitems/routers/router.inventoryitems'

const app: Application = express()

app.set('port', process.env.PORT || 3000)

app.use(helmet())
app.use(cors())
app.use(json())
app.use(logger(loggerMsg))

app.use('/members', membersRouter)
app.use('/finances', financesRouter)
app.use('/inventoryitems', inventoryitemsRouter)

createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
