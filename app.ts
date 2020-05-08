import * as dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
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

export default app
