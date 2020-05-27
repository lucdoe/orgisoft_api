// importing third party middleware
import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import express, { Request, Response, NextFunction, json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { createConnection } from 'typeorm'

// importing routes / controllers
import members from './routers/members/members'
import inventory from './routers/inventory'
import position from './routers/members/position'
import status from './routers/members/status'
import qualification from './routers/members/qualification'
import membergroup from './routers/members/membergroup'

// set instance of express/ app server
const app = express()

// logger
const customLogMsg =
	'\n===== Begin Log =====\n\n  Method:  :method,\nEndpoint:  :url,\n  Status:  :status,\n  Lenght:  :res[content-length],\n      In:  :response-time ms\n\n====== End Log ======\n'

// set app port
app.set('port', process.env.PORT || 3000)

// mounting third party middleware
app.use(helmet())
app.use(cors())
app.use(logger(customLogMsg))
app.use(json())

// mounting routes / controllers
app.use('/members', members)
app.use('/inventoryitems', inventory)
app.use('/positions', position)
app.use('/statuses', status)
app.use('/qualifications', qualification)
app.use('/membergroups', membergroup)

// start db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

// not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).json('Not found. (4XX)')
})

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack)
	res.status(500).json('Internal Server error. (5XX)')
})

export default app
