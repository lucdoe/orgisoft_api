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
import * as invContrls from './controllers/controllers.inventory'
import * as memberReadContrls from './controllers/member/read'

// set instance of express/ inventory server
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

/*
	create routes
*/
// inventoryitems
app.post('/inventoryitems', accessToken, invContrls.createInventoryitem)
app.post('/inventoryitems/groups', accessToken, invContrls.createInventoryGroup)
app.post('/inventoryitems/places', accessToken, invContrls.createInventoryPlace)

/*
	read routes
*/
// inventoryitems
app.get('/inventoryitems', accessToken, invContrls.readInventoryitems)
app.get('/inventoryitems/:id', accessToken, invContrls.readInventoryitem)
app.get('/inventoryitems/:id/members', accessToken, invContrls.readItemOwner)
// members
app.get('/members', accessToken, memberReadContrls.readMembers)
app.get('/members/:id', accessToken, memberReadContrls.readMember)
app.get('/members/:id/addresses', accessToken, memberReadContrls.readMemberAddress)
app.get('/members/:id/positions', accessToken, memberReadContrls.readMemberPosition)
app.get('/members/:id/statuses', accessToken, memberReadContrls.readMemberStatus)
app.get('/members/:id/groups', accessToken, memberReadContrls.readMemberGroup)
app.get('/members/:id/qualifications', accessToken, memberReadContrls.readMemberQualification)
app.get('/members/:id/inventoryitems', accessToken, memberReadContrls.readMemberinventoryitem)
app.get('/positions', accessToken, memberReadContrls.readPositions)
app.get('/positions/:id', accessToken, memberReadContrls.readPostion)
app.get('/statuses', accessToken, memberReadContrls.readStatuses)
app.get('/statuses/:id', accessToken, memberReadContrls.readStatus)
app.get('/qualifications', accessToken, memberReadContrls.readQualifications)
app.get('/qualifications/:id', accessToken, memberReadContrls.readQualification)
app.get('/membergroups', accessToken, memberReadContrls.readMembergroups)
app.get('/membergroups/:id', accessToken, memberReadContrls.readMembergroup)

/*
	update routes
*/
// inventoryitems
app.put('/inventoryitems/:id', accessToken, invContrls.updateInventoryitem)
app.put('/inventoryitems/groups/:id', accessToken, invContrls.updateInventoryGroup)
app.put('/inventoryitems/places/:id', accessToken, invContrls.updateInventoryPlace)

/*
	delete routes
*/
// inventoryitems
app.delete('/inventoryitems/:id', accessToken, invContrls.deleteInventoryitem)
app.delete('/inventoryitems/groups/:id', accessToken, invContrls.deleteInventorygroup)
app.delete('/inventoryitems/places/:id', accessToken, invContrls.deleteInventoryplace)

// start db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
