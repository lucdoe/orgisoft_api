import express from 'express'
import * as auth from './auth.controller'
import { createDbConnection } from './auth.dbConfig'
const app = express()

app.use(express.json())

createDbConnection()

app.post('/auth/register', auth.registerUser)
app.post('/auth/login', auth.loginUser)
app.post('/auth/refreshtoken', auth.refreshLoginToken)
app.post('/auth/logout', auth.logoutUser)

app.listen(4000, () => {
	const serverMsg: string = '	Auth Server running at http://localhost:4000 \n'
	console.log(serverMsg)
})
