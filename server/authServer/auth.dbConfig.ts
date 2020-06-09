import mongoose from 'mongoose'

export const createDbConnection = () => {
	const uri = `mongodb+srv://${process.env.AUTH_DB_PW}:${process.env.AUTH_DB_USER}.mongodb.net/${process.env.AUTH_DB_NAME}?retryWrites=true&w=majority`
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}
