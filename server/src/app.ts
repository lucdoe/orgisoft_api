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
	findInventoryitems,
	findInventoryitemById,
	findInventoryitemByIdMember,
} from './controllers/inventory/getInventory'
import { deleteInventoryitemById } from './controllers/inventory/deleteInventory'
import {
	createInventoryitem,
	updateInventoryitemById,
} from './controllers/inventory/createInventory'

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

// TODO:
app.post('/inventoryitems', accessToken, createInventoryitem)
app.post('/inventoryitems/:id', accessToken, updateInventoryitemById)
app.delete('/inventoryitems/:id', accessToken, deleteInventoryitemById)
app.get('/inventoryitems', accessToken, findInventoryitems)
app.get('/inventoryitems/:id', accessToken, findInventoryitemById)
app.get('/inventoryitems/:id/members', accessToken, findInventoryitemByIdMember)

// start db connection
createConnection()
	.then(async (connection) => {
		return connection
	})
	.catch((error) => console.log(error))

export default app
