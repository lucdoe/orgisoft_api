import * as dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Currencys } from './src/models/Currencys'
import * as express from 'express'
import { json } from 'express'
import * as helmet from 'helmet'
import * as logger from 'morgan'

// set instance of express
const app = express()

// log msg
const customLogMsg =
	'\n===== Begin Log =====\n\n  Method:  :method,\nEndpoint:  :url,\n  Status:  :status,\n  Lenght:  :res[content-length],\n      In:  :response-time ms\n\n====== End Log ======\n'

// define middleware
app.set('port', process.env.PORT || 3000)
app.use(helmet())
app.use(logger(customLogMsg))
app.use(json())

// orm/db connection
createConnection()
	.then(async (connection) => {
		console.log('Inserting a new currency into the database...')
		const currencys = new Currencys()
		currencys.currency = 'TEST'
		currencys.exchange_rate = 5.32
		currencys.currency_code = 'TST'
		await connection.manager.save(currencys)
		console.log('Saved a new currencys with id: ' + currencys.currency_id)

		console.log('Loading currencys from the database...')
		const currencysDb = await connection.manager.find(Currencys)
		console.log('Loaded currencys: ', currencysDb)
	})
	.catch((error) => console.log(error))

export default app
