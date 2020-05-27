// importing third party middleware
import express, { Request, Response, NextFunction, json } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { loggerMsgTemplate } from './helpers/logger'

// importing routes / controllers
import members from './routers/members/members'
import inventory from './routers/inventory'
import position from './routers/members/position'
import status from './routers/members/status'
import qualification from './routers/members/qualification'
import membergroup from './routers/members/membergroup'

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
app.use('/inventoryitems', inventory)
app.use('/positions', position)
app.use('/statuses', status)
app.use('/qualifications', qualification)
app.use('/membergroups', membergroup)

// db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
