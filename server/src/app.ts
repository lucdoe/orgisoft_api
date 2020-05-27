// importing third party middleware
import express, { json } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { loggerMsgTemplate } from './helpers/helper.logger'

// importing routes / controllers
import members from './routers/router.members'
import inventorys from './routers/router.inventorys'
import positions from './routers/router.positions'
import statuses from './routers/router.statuses'
import qualifications from './routers/router.qualifications'
import membergroups from './routers/router.membergroups'

// set instance of express
const app = express()

// set app port
app.set('port', process.env.PORT || 3000)

// mounting third party middleware
app.use(helmet())
app.use(cors())
app.use(json())
app.use(logger(loggerMsgTemplate))

// mounting routes / controllers
app.use('/members', members)
app.use('/inventoryitems', inventorys)
app.use('/positions', positions)
app.use('/statuses', statuses)
app.use('/qualifications', qualifications)
app.use('/membergroups', membergroups)

// db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
