import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'
dotenv.config()

const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET

export const accessToken = (request: Request, response: Response, next: NextFunction) => {
	try {
		const authHeader: string | undefined = request.headers['authorization']
		const token: string | undefined = authHeader && authHeader.split(' ')[1]
		if (token == undefined) return response.status(401).json(' Unauthorized access! Please log in. ')

		jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
			if (err) return response.status(403).json(' Unvalid access! Please try again.')
			next()
		})
	} catch (err) {
		console.log(err)
	}
}