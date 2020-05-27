import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import express, { Request, Response, NextFunction, json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'
import { createConnection } from 'typeorm'

// controllers
import { accessToken } from './helpers/authenticate'
import * as memberReadContrls from './controllers/member/read'

//routers
import members from './routers/members'
import inventory from './routers/inventory'

// set instance of express/ app server
const app = express()

// logger
const customLogMsg =
	'\n===== Begin Log =====\n\n  Method:  :method,\nEndpoint:  :url,\n  Status:  :status,\n  Lenght:  :res[content-length],\n      In:  :response-time ms\n\n====== End Log ======\n'

// middleware
app.set('port', process.env.PORT || 3000)
app.use(helmet())
app.use(cors())
app.use(logger(customLogMsg))
app.use(json())
app.use('/members', members)
app.use('/inventoryitems', inventory)

// mount controllers to routes
app.get('/positions', accessToken, memberReadContrls.readPositions)
app.get('/positions/:id', accessToken, memberReadContrls.readPostion)
app.get('/statuses', accessToken, memberReadContrls.readStatuses)
app.get('/statuses/:id', accessToken, memberReadContrls.readStatus)
app.get('/qualifications', accessToken, memberReadContrls.readQualifications)
app.get('/qualifications/:id', accessToken, memberReadContrls.readQualification)
app.get('/membergroups', accessToken, memberReadContrls.readMembergroups)
app.get('/membergroups/:id', accessToken, memberReadContrls.readMembergroup)

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
