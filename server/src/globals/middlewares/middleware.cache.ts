import redis, { RedisClient } from 'redis'
import { Request, Response, NextFunction } from 'express'
import { convertJSONtoString, convertStringToJSON } from '../../globals/helpers/helper.jsonConverter'

export const client: RedisClient = redis.createClient()

export const getOneCacheItem = (request: Request, response: Response, next: NextFunction) => {
	const { id } = request.params

	client.get(`${request.path.split('/')[1]} ${id}`, (err, data) => {
		if (err) throw err

		if (data !== null) {
			const result = convertStringToJSON(data)
			response.status(200).json({ cache: result })
		} else {
			next()
		}
	})
}

export const getAllCacheItems = (request: Request, response: Response, next: NextFunction) => {
	client.get(`all ${request.path.split('/')[1]}`, (err, data) => {
		if (err) throw err

		if (data !== null) {
			const result = convertStringToJSON(data)
			response.status(200).json({ cache: result })
		} else {
			next()
		}
	})
}

export const setCache = (data) => {
	const { id, path, cache } = data

	const cacheData = convertJSONtoString(cache)

	if (id == 'all') client.setex(`all ${path}`, 1800, cacheData)

	return client.setex(`${path} ${id}`, 1800, cacheData)
}
