import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'

dotenv.config()

const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET

export const accessToken = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers['authorization']
		const token = authHeader && authHeader.split(' ')[1]
		if (token == null) return res.status(401).json(' Unauthorized access! Please log in. ')

		jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
			if (err) return res.status(403).json(' Unvalid access please try again.')
			next()
		})
	} catch (err) {
		console.log(err)
	}
}
