require('dotenv').config()
import * as bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import User from './model.user'
import jwt from 'jsonwebtoken'

let refreshTokens: string[] = []
const refreshTokenSecret: any = process.env.REFRESH_TOKEN_SECRET
const accessTokenSecret: any = process.env.TOKEN_KEY

export const registerUser = async (request: Request, response: Response, next: NextFunction) => {
	const { firstName, email, password } = request.body

	if (await User.findOne({ email })) {
		response.status(401).json({ error: 'This email already exists!' })
	} else {
		const hashedPassword = await bcrypt.hash(password, 10)

		await User.create({
			firstName,
			email,
			password: hashedPassword,
		})

		const user: object = {
			firstName,
			email,
		}

		const accessToken = generateAccessToken(user)
		const refreshToken: string = jwt.sign(user, refreshTokenSecret)

		refreshTokens.push(refreshToken)
		response.status(200).json({ accessToken, refreshToken })
	}
}

export const loginUser = async (request: Request, response: Response, next: NextFunction) => {
	const password: string = request.body.password
	const email: string = request.body.email

	await User.findOne({ email }, async (error, user) => {
		if (user) {
			const incomingPassword: string = user['password']

			await bcrypt.compare(password, incomingPassword, (error, result) => {
				if (result) {
					const userObject = {
						firstName: user['firstName'],
						email: user['email'],
						password: user['password'],
					}
					const accessToken = generateAccessToken(userObject)
					const refreshToken: string = jwt.sign(userObject, refreshTokenSecret)
					refreshTokens.push(refreshToken)
					response.status(200).json({ accessToken, refreshToken })
				} else if (error) {
					response.status(403).json({ error: 'Unvalid User data try again.' })
				} else {
					response.status(403).json({ error: 'Unvalid User data try again.' })
				}
			})
		}
	})
}

export const refreshLoginToken = (request: Request, response: Response, next: NextFunction) => {
	const refreshToken: string = request.body.token

	if (refreshToken == null) return response.status(401).send('Unauthorized')
	if (!refreshTokens) return response.status(403).send('Unauthorized')

	jwt.verify(refreshToken, refreshTokenSecret, (error, user) => {
		if (error) return response.status(403).send('Unauthorized')
		const accessToken: string = generateAccessToken({ user })
		response.json({ accessToken })
	})
}

export const logoutUser = (request: Request, response: Response, next: NextFunction) => {
	refreshTokens = refreshTokens.filter((token) => token !== request.body.token)
	response.status(204).send('Unauthorized')
}

const generateAccessToken = (user: string | object | Buffer): string => {
	return jwt.sign(user, accessTokenSecret)
}
