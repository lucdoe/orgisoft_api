import * as dotenv from 'dotenv'
dotenv.config()
import * as bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import User from './auth.model.user'
import jwt from 'jsonwebtoken'

let refreshTokens: string[] = []
const refreshTokenSecret: any = process.env.REFRESH_TOKEN_SECRET
const accessTokenSecret: any = process.env.TOKEN_KEY

export const registerUser = async (request: Request, response: Response, next: NextFunction) => {
	const { firstName, lastName, email, password, passwordRepeat } = request.body

	const emailAlreadyTaken = (user) => {
		if (user) response.status(401).json({ error: 'This email already exists!' })
	}

	// password function
	if (password.length <= 7) response.json({ error: 'Password to short.' })
	if (password != passwordRepeat) response.json({ error: 'Passwords do not match.' })

	try {
		const checkedUser = await User.findOne({ email })
		if (checkedUser) emailAlreadyTaken(checkedUser)
		const hashedPassword = await bcrypt.hash(password, 10)

		await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		})

		const userObject: object = {
			firstName,
			email,
		}

		const accessToken = generateAccessToken(userObject)
		const refreshToken: string = jwt.sign(userObject, refreshTokenSecret)

		refreshTokens.push(refreshToken)
		response.status(200).json({ accessToken, refreshToken })
	} catch (error) {
		next()
	}
}

export const loginUser = async (request: Request, response: Response, next: NextFunction) => {
	const password: string = request.body.password
	const email: string = request.body.email

	await User.findOne({ email }, async (error, user) => {
		if (error) response.status(403).json({ error: 'Wrong username or password', status: 'Unauthorized' })

		if (!user) {
			response.status(403).json({ error: 'Wrong username or password', status: 'Unauthorized' })
		} else {
			const incomingPassword = user['password']

			await bcrypt.compare(password, incomingPassword, (error, result) => {
				if (error || !result)
					response.status(403).json({
						error: 'Wrong username or password',
						status: 'Unauthorized',
					})

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
				}
			})
		}
	})
}

export const refreshLoginToken = (request: Request, response: Response, next: NextFunction) => {
	const refreshToken: string = request.body.token

	if (refreshToken == null)
		return response.status(401).json({ error: 'Log in required', status: 'Unauthorized' })
	if (!refreshTokens) return response.status(403).json({ error: 'Log in required', status: 'Unauthorized' })

	jwt.verify(refreshToken, refreshTokenSecret, (error, user) => {
		if (error)
			return response.status(403).json({
				error: 'Unvalid access',
				message: 'Try diffrent username or password',
				status: 'Unauthorized',
			})
		const accessToken: string = generateAccessToken({ user })
		response.json({ accessToken })
	})
}

export const logoutUser = (request: Request, response: Response, next: NextFunction) => {
	refreshTokens = refreshTokens.filter((token) => token !== request.body.token)
	response.status(403).json({ message: 'Loged out', status: 'Unauthorized' })
}

const generateAccessToken = (user: string | object | Buffer): string => {
	return jwt.sign(user, accessTokenSecret)
}
