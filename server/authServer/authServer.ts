require('dotenv').config()

import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())

// TO-DO: replace with redis cache
let refreshTokens: string[] = []

const refreshTokenSecret: any = process.env.REFRESH_TOKEN_SECRET
const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET

app.post('/token', (req, res) => {
	const refreshToken: string = req.body.token

	if (refreshToken == null) return res.status(401).send('Unauthorized')
	if (!refreshTokens) return res.status(403).send('Unauthorized')

	jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
		if (err) return res.status(403).send('Unauthorized')
		const accessToken: string = generateAccessToken({ user })
		res.json({ accessToken })
	})
})

app.delete('/logout', (req, res) => {
	refreshTokens = refreshTokens.filter((token) => token !== req.body.token)
	res.status(204).send('Unauthorized')
})

app.post('/login', (req, res) => {
	const username: string = req.body.username
	// TO-DO: User Authorization DB
	const user: Object = { username }

	const accessToken = generateAccessToken(user)
	const refreshToken: string = jwt.sign(user, refreshTokenSecret)
	// TO-DO: save refreshToken in Redis Cache
	refreshTokens.push(refreshToken)
	res.json({ accessToken, refreshToken })
})

const generateAccessToken = (user: string | object | Buffer): string => {
	return jwt.sign(user, accessTokenSecret)
}

app.listen(4000, () => {
	const startUpMessage: string =
		'	Auth Server running at http://localhost:4000 \n'
	console.log(startUpMessage)
})
