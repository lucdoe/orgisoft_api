import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

export const createDbConnection = async () => {
	const dbPw = process.env.AUTH_DB_PW
	const dbUser = process.env.AUTH_DB_USER
	const dbName = process.env.AUTH_DB_NAME
	const uri = `mongodb+srv://${dbUser}:${dbPw}@cluster0-8reyi.mongodb.net/${dbName}?retryWrites=true&w=majority`
	await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
}
