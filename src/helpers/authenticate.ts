import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET

const accessToken = async (req, res, next) => {
	try {
		const authHeader = req.headers['authorization']
		const token = (await authHeader) && (await authHeader.split(' ')[1])
		if (token == null)
			return res.status(401).json(' Unauthorized access! Please log in. ')

		jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
			if (err) return res.sendStatus(403)
			req.user = user
			next()
		})
	} catch (err) {
		console.log(err)
	}
}

exports.accessToken = accessToken
