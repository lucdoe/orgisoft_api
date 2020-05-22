import app from '../src/app'
import request from 'supertest'
import { createConnection } from 'typeorm'

describe('Testing app ', () => {
	it('test DB connection object', async () => {
		const connection = await createConnection()
		expect(connection).toEqual(expect.any(Object))
	})
	it('/GET should response 200', async () => {
		const response = await request(app).get('/')
		expect(response.status).toBe(200)
	})
	it('/GET should response 404', async () => {
		const response = await request(app).get('/dhsgklhjfg')
		expect(response.status).toBe(404)
	})
})
