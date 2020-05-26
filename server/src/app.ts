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
import * as create from './controllers/inventory/create'
import * as read from './controllers/inventory/read'
import * as update from './controllers/inventory/update'
import * as deletes from './controllers/inventory/delete'

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

// create
app.post('/inventoryitems', accessToken, create.newInventoryitem)
app.post('/inventoryitems/groups', accessToken, create.newInventoryGroup)
app.post('/inventoryitems/places', accessToken, create.newInventoryPlace)
// read
app.get('/inventoryitems', accessToken, read.allInventoryitems)
app.get('/inventoryitems/:id', accessToken, read.oneInventoryitem)
app.get('/inventoryitems/:id/members', accessToken, read.inventoryitemOwner)
// update
app.put('/inventoryitems/:id', accessToken, update.oneInventoryitem)
app.put('/inventoryitems/groups/:id', accessToken, update.oneInventoryGroup)
app.put('/inventoryitems/places/:id', accessToken, update.oneInventoryPlace)
// delete
app.delete('/inventoryitems/:id', accessToken, deletes.oneInventoryitem)
app.delete('/inventoryitems/groups/:id', accessToken, deletes.oneInventorygroup)
app.delete('/inventoryitems/places/:id', accessToken, deletes.oneInventoryplace)

// start db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
