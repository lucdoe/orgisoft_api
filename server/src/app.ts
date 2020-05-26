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
import {
	createInventoryitem,
	createInventoryGroup,
	createInventoryPlace,
} from './controllers/inventory/create'
import {
	findAllInventoryitems,
	findInventoryitem,
	findInventoryitemOwner,
} from './controllers/inventory/read'
import {
	updateInventoryitem,
	updateInventoryGroup,
	updateInventoryPlace,
} from './controllers/inventory/update'
import {
	deleteInventoryitem,
	deleteInventorygroup,
	deleteInventoryplace,
} from './controllers/inventory/delete'

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
app.post('/inventoryitems', accessToken, createInventoryitem)
app.post('/inventoryitems/groups', accessToken, createInventoryGroup)
app.post('/inventoryitems/places', accessToken, createInventoryPlace)
// read
app.get('/inventoryitems', accessToken, findAllInventoryitems)
app.get('/inventoryitems/:id', accessToken, findInventoryitem)
app.get('/inventoryitems/:id/members', accessToken, findInventoryitemOwner)
// update
app.put('/inventoryitems/:id', accessToken, updateInventoryitem)
app.put('/inventoryitems/groups/:id', accessToken, updateInventoryGroup)
app.put('/inventoryitems/places/:id', accessToken, updateInventoryPlace)
// delete
app.delete('/inventoryitems/:id', accessToken, deleteInventoryitem)
app.delete('/inventoryitems/groups/:id', accessToken, deleteInventorygroup)
app.delete('/inventoryitems/places/:id', accessToken, deleteInventoryplace)

// start db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
