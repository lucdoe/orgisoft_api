import express from 'express'
import { registerUser, loginUser, refreshLoginToken, logoutUser } from './auth.controller'
import { createDbConnection } from './auth.dbConfig'
const app = express()

app.use(express.json())

createDbConnection()

app.post('/auth/register', registerUser)
app.post('/auth/login', loginUser)
app.post('/auth/refreshtoken', refreshLoginToken)
app.delete('/auth/logout', logoutUser)

app.listen(4000, () => {
	const startUpMessage: string = '	Auth Server running at http://localhost:4000 \n'
	console.log(startUpMessage)
})
